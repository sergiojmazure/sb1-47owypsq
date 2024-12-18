import { handleRoute } from './handlers.js';
import { routes } from './routes.js';
import { initializeMobileMenu, initializeContactForm, initializeSmoothScroll } from '../utils/eventHandlers.js';
import { initializeLoginForm } from '../utils/authHandlers.js';
import { initializePostForm } from '../utils/formHandlers.js';

export function initializeEventHandlers() {
  initializeMobileMenu();
  initializeContactForm();
  initializeSmoothScroll();
  initializeLoginForm();
  initializePostForm();
}

export function initializeRouterEvents() {
  // Handle browser navigation
  window.addEventListener('popstate', () => handleRoute(routes));
  
  // Handle link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && link.href.startsWith(window.location.origin)) {
      e.preventDefault();
      const url = new URL(link.href);
      window.history.pushState({}, '', url.pathname + url.search);
      handleRoute(routes);
    }
  });
}