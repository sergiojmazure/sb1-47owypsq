export async function handleRoute(routes) {
  const path = window.location.pathname;
  let page = routes[path];
  let params = {};

  if (!page) {
    // Check for dynamic routes
    if (path.startsWith('/blog/')) {
      const slug = path.split('/blog/')[1];
      page = routes['/blog/:slug'];
      params = { slug };
    } else if (path.startsWith('/admin/posts/edit/')) {
      const slug = path.split('/admin/posts/edit/')[1];
      page = routes['/admin/posts/edit/:slug'];
      params = { slug };
    }
  }

  if (!page) {
    page = routes['/'];  // Default to home page
  }

  try {
    const module = await page(params);
    const content = await module.default(params);
    document.getElementById('app').innerHTML = content;
    
    // Initialize event handlers after content is loaded
    const { initializeEventHandlers } = await import('./eventHandlers.js');
    initializeEventHandlers();
  } catch (error) {
    console.error('Error loading page:', error);
    document.getElementById('app').innerHTML = `
      <div class="text-center py-12">
        <h1 class="text-2xl font-bold mb-4">Error loading page</h1>
        <a href="/" class="text-blue-600 hover:underline">Go home</a>
      </div>
    `;
  }
}