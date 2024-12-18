import { supabase } from '../../lib/supabase.js';
import { handleError } from '../../utils/errorHandler.js';
import { POST_QUERIES } from './queries.js';

export async function getAllPosts() {
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select(POST_QUERIES.list)
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
      .select(POST_QUERIES.detail)
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return post;
  } catch (error) {
    handleError(error, 'getPostBySlug');
    return null;
  }
}

export async function createPost(postData) {
  try {
    const { data, error } = await supabase
      .from('posts')
      .insert([postData])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    handleError(error, 'createPost');
    return null;
  }
}

export async function updatePost(slug, postData) {
  try {
    const { data, error } = await supabase
      .from('posts')
      .update(postData)
      .eq('slug', slug)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    handleError(error, 'updatePost');
    return null;
  }
}

export async function deletePost(slug) {
  try {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('slug', slug);

    if (error) throw error;
    return true;
  } catch (error) {
    handleError(error, 'deletePost');
    return false;
  }
}