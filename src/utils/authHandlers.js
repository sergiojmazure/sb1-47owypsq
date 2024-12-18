import { signIn } from '../services/authService.js';

export function initializeLoginForm() {
  const form = document.getElementById('loginForm');
  const errorDiv = document.getElementById('loginError');
  
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = form.email.value;
    const password = form.password.value;
    
    try {
      const { user } = await signIn(email, password);
      if (user) {
        window.location.href = '/admin/posts';
      }
    } catch (error) {
      errorDiv.textContent = 'Invalid email or password';
      errorDiv.classList.remove('hidden');
    }
  });
}