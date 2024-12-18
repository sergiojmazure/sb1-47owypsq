import { supabase } from '../lib/supabase.js';
import { handleError } from '../utils/errorHandler.js';

export async function signIn(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    return data;
  } catch (error) {
    handleError(error, 'signIn');
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  } catch (error) {
    handleError(error, 'getCurrentUser');
    return null;
  }
}