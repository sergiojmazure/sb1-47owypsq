export function validatePost(post) {
  const errors = [];

  if (!post.title?.trim()) {
    errors.push('Title is required');
  }

  if (!post.content?.trim()) {
    errors.push('Content is required');
  }

  if (!post.slug?.trim()) {
    errors.push('Slug is required');
  } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
    errors.push('Invalid slug format');
  }

  return errors;
}

export function validateImage(file) {
  const errors = [];
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

  if (file.size > maxSize) {
    errors.push('Image size must be less than 5MB');
  }

  if (!allowedTypes.includes(file.type)) {
    errors.push('Only JPG, PNG and WebP images are allowed');
  }

  return errors;
}