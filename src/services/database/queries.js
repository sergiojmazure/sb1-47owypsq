export const POST_QUERIES = {
  getAllPosts: `
    id,
    title,
    slug,
    excerpt,
    cover_image,
    published_at,
    author_name,
    author_avatar,
    category_name
  `,
  
  getPostBySlug: `
    id,
    title,
    slug,
    content,
    excerpt,
    cover_image,
    published_at,
    author_name,
    author_avatar,
    category_name,
    created_at,
    updated_at
  `,

  getCategories: `
    SELECT DISTINCT category_name 
    FROM posts 
    WHERE category_name IS NOT NULL 
    ORDER BY category_name
  `
};