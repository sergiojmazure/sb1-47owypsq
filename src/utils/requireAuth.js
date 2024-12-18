import { getCurrentUser } from '../services/authService.js';

export async function requireAuth() {
  const user = await getCurrentUser();
  
  if (!user) {
    window.location.href = '/admin/login';
    return null;
  }
  
  return user;
}