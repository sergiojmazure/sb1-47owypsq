import { initRouter } from './router/index.js';
import { setupDatabase } from './services/database/setup.js';
import './style.css';

async function initApp() {
  try {
    await setupDatabase();
    initRouter();
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
}

document.addEventListener('DOMContentLoaded', initApp);