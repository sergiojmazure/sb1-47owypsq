import { supabase } from '../lib/supabaseClient.js';

async function setupDatabase() {
  // Create posts table
  const { error: postsError } = await supabase.rpc('create_posts_table', {
    sql: `
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
        category_name TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      -- Add sample post
      INSERT INTO posts (
        title,
        slug,
        content,
        excerpt,
        author_name,
        category_name
      ) VALUES (
        'Bienvenidos a nuestro Blog',
        'bienvenidos-a-nuestro-blog',
        '# Bienvenidos\n\nEste es nuestro primer post en el blog.',
        'Una breve introducción a nuestro blog de tecnología e IA.',
        'Sergio J. Mazure',
        'General'
      ) ON CONFLICT (slug) DO NOTHING;
    `
  });

  if (postsError) {
    console.error('Error creating posts table:', postsError);
  }
}

// Only run setup in development
if (process.env.NODE_ENV === 'development') {
  setupDatabase().catch(console.error);
}