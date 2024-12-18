export const routes = {
  '/': () => import('../pages/Home.js'),
  '/blog': () => import('../pages/Blog.js'),
  '/blog/:slug': (params) => import('../pages/BlogPost.js').then(module => ({
    default: () => module.default(params)
  })),
  '/privacy': () => import('../pages/PrivacyPolicy.js'),
  '/admin': () => import('../pages/admin/Login.js'),
  '/admin/login': () => import('../pages/admin/Login.js'),
  '/admin/posts': () => import('../pages/admin/PostList.js'),
  '/admin/posts/new': () => import('../pages/admin/NewPost.js'),
  '/admin/posts/edit/:slug': (params) => import('../pages/admin/EditPost.js').then(module => ({
    default: () => module.default(params)
  }))
};