// Add new routes
const routes = {
  '/': () => import('./pages/Home.js'),
  '/blog': () => import('./pages/Blog.js'),
  '/blog/:slug': (params) => import('./pages/BlogPost.js'),
  '/admin/login': () => import('./pages/admin/Login.js'),
  '/admin/posts': () => import('./pages/admin/PostList.js'),
  '/admin/posts/new': () => import('./pages/admin/EditPost.js'),
  '/admin/posts/edit/:slug': (params) => import('./pages/admin/EditPost.js')
};