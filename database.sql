-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create posts table if it doesn't exist
CREATE TABLE IF NOT EXISTS posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT,
    excerpt TEXT,
    cover_image TEXT,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    author_name TEXT,
    author_avatar TEXT,
    categories TEXT[] DEFAULT ARRAY['General'],
    post_number SERIAL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at DESC);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous read access" ON posts;
DROP POLICY IF EXISTS "Allow authenticated users full access" ON posts;

-- Create new policies
CREATE POLICY "Allow anonymous read access" 
    ON posts FOR SELECT 
    USING (true);

CREATE POLICY "Allow authenticated users full access" 
    ON posts FOR ALL 
    USING (auth.role() = 'authenticated');

-- Create webhook function for external integrations
CREATE OR REPLACE FUNCTION handle_webhook_post()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    _post json;
    _result json;
BEGIN
    -- Get the post data from the request body
    _post := current_setting('request.body', true)::json;
    
    -- Insert or update the post
    INSERT INTO posts (
        title,
        slug,
        content,
        excerpt,
        cover_image,
        author_name,
        author_avatar,
        categories,
        published_at
    ) VALUES (
        (_post->>'title')::text,
        (_post->>'slug')::text,
        (_post->>'content')::text,
        (_post->>'excerpt')::text,
        (_post->>'cover_image')::text,
        (_post->>'author_name')::text,
        (_post->>'author_avatar')::text,
        (SELECT array_agg(x::text) FROM jsonb_array_elements_text(_post->'categories') x),
        COALESCE((_post->>'published_at')::timestamp with time zone, CURRENT_TIMESTAMP)
    )
    ON CONFLICT (slug) DO UPDATE
    SET
        title = EXCLUDED.title,
        content = EXCLUDED.content,
        excerpt = EXCLUDED.excerpt,
        cover_image = EXCLUDED.cover_image,
        author_name = EXCLUDED.author_name,
        author_avatar = EXCLUDED.author_avatar,
        categories = EXCLUDED.categories,
        updated_at = CURRENT_TIMESTAMP
    RETURNING to_jsonb(posts.*) INTO _result;
    
    RETURN json_build_object(
        'success', true,
        'data', _result
    );
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION handle_webhook_post TO authenticated;

-- Insert sample post if it doesn't exist
INSERT INTO posts (
    title,
    slug,
    content,
    excerpt,
    author_name,
    categories
) VALUES (
    'Bienvenidos a nuestro Blog',
    'bienvenidos-a-nuestro-blog',
    '# Bienvenidos\n\nEste es nuestro primer post en el blog de Innovacion.ec. Aquí compartiremos las últimas novedades sobre Inteligencia Artificial y cómo puede transformar tu negocio.',
    'Una breve introducción a nuestro blog de tecnología e IA.',
    'Sergio J. Mazure',
    ARRAY['General', 'Tecnología']
) ON CONFLICT (slug) DO NOTHING;