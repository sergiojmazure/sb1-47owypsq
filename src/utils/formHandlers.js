import { createPost, updatePost } from '../services/posts/postService.js';
import { slugify } from './slugify.js';

export function initializePostForm() {
  const form = document.getElementById('newPostForm') || document.getElementById('editPostForm');
  if (!form) return;

  // For new posts, handle automatic slug generation
  const titleInput = document.getElementById('postTitle');
  const slugInput = document.getElementById('postSlug');
  
  if (titleInput && slugInput) {
    titleInput.addEventListener('input', (e) => {
      slugInput.value = slugify(e.target.value);
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const postData = Object.fromEntries(formData.entries());
    
    // Convert categories string to array
    if (postData.categories) {
      postData.categories = postData.categories
        .split(',')
        .map(cat => cat.trim())
        .filter(cat => cat.length > 0);
    }
    
    try {
      if (form.id === 'newPostForm') {
        const newPost = await createPost({
          ...postData,
          published_at: new Date().toISOString()
        });
        
        if (newPost) {
          window.location.href = '/admin/posts';
        } else {
          alert('Error al crear el post');
        }
      } else {
        const slug = window.location.pathname.split('/admin/posts/edit/')[1];
        const updatedPost = await updatePost(slug, postData);
        
        if (updatedPost) {
          window.location.href = '/admin/posts';
        } else {
          alert('Error al actualizar el post');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al procesar el post');
    }
  });
}