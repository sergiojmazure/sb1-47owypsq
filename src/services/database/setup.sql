-- Modify posts table to support multiple categories
ALTER TABLE posts 
ADD COLUMN IF NOT EXISTS categories TEXT[],
ADD COLUMN IF NOT EXISTS post_number SERIAL;

-- Update the existing posts to use the array format for categories
UPDATE posts 
SET categories = ARRAY[category_name]
WHERE categories IS NULL AND category_name IS NOT NULL;

-- Create a webhook function for external integrations
CREATE OR REPLACE FUNCTION handle_webhook_post()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    _post posts;
BEGIN
    -- Get the post data from the request
    _post := json_populate_record(
        null::posts,
        current_setting('request.jwt.claims', true)::json->>'post'
    );
    
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
        _post.title,
        _post.slug,
        _post.content,
        _post.excerpt,
        _post.cover_image,
        _post.author_name,
        _post.author_avatar,
        _post.categories,
        COALESCE(_post.published_at, CURRENT_TIMESTAMP)
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
        updated_at = CURRENT_TIMESTAMP;
        
    RETURN json_build_object(
        'success', true,
        'message', 'Post processed successfully'
    );
END;
$$;