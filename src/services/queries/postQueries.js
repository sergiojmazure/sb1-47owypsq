export const POST_QUERIES = {
  listPosts: `
    *,
    categories (
      name,
      slug
    ),
    authors (
      name,
      avatar_url
    )
  `,
  
  singlePost: `
    *,
    categories (
      name,
      slug
    ),
    authors (
      name,
      avatar_url,
      bio
    )
  `
};