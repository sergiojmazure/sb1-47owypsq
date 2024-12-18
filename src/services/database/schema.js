// Table schemas
export const POSTS_TABLE_SCHEMA = `
  -- Enable UUID extension if not exists
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

  -- Create posts table
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
    category_name TEXT DEFAULT 'General',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  -- Create indexes
  CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
  CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at DESC);

  -- Enable RLS
  ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

  -- Create policies
  DO $$ 
  BEGIN
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
  END $$;
`;