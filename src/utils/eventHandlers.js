import { handleRoute } from '../router/handlers.js';
import { routes } from '../router/routes.js';
import { deletePost } from '../services/posts/postService.js';

export function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

export function initializeContactForm() {
  const form = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const contactHeader = document.getElementById('contactHeader');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      try {
        const formData = new FormData(form);
        await fetch(form.action, {
          method: 'POST',
          body: formData
        });
        
        form.style.display = 'none';
        if (contactHeader) contactHeader.style.display = 'none';
        if (thankYouMessage) thankYouMessage.classList.remove('hidden');
      } catch (error) {
        console.error('Error:', error);
      }
    });
  }
}

export function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const top = target.offsetTop;
        if (window.parent !== window) {
          window.parent.postMessage({ type: 'scroll', top }, '*');
        }
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add global function for delete post
window.handleDeletePost = async (slug) => {
  if (confirm('¿Estás seguro de que deseas eliminar este post?')) {
    try {
      const success = await deletePost(slug);
      if (success) {
        // Refresh the page to show updated list
        window.location.reload();
      } else {
        alert('Error al eliminar el post');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al eliminar el post');
    }
  }
};