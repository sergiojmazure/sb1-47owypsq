import { supabase } from '../lib/supabase.js';
import { handleError } from '../utils/errorHandler.js';

export async function getAllPosts() {
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select(`
        id,
        title,
        slug,
        excerpt,
        cover_image,
        published_at,
        author_name,
        author_avatar,
        category_name
      `)
      .order('published_at', { ascending: false });

    if (error) throw error;
    return posts || [];
  } catch (error) {
    handleError(error, 'getAllPosts');
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const { data: post, error } = await supabase
      .from('posts')
      .select(`
        id,
        title,
        slug,
        content,
        excerpt,
        cover_image,
        published_at,
        author_name,
        author_avatar,
        category_name
      `)
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return post;
  } catch (error) {
    handleError(error, 'getPostBySlug');
    return null;
  }
}