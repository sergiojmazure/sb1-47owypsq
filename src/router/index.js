import { routes } from './routes.js';
import { handleRoute } from './handlers.js';
import { initializeRouterEvents } from './eventHandlers.js';

export function initRouter() {
  // Initialize router events
  initializeRouterEvents();
  
  // Handle initial route
  handleRoute(routes);
}

export { routes, handleRoute };