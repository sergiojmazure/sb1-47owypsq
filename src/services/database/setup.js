import { supabase } from '../../lib/supabase.js';
import { handleError } from '../../utils/errorHandler.js';
import { setupStorage } from '../storage/setup.js';

export async function setupDatabase() {
  try {
    // Call the setup_database function
    const { error: dbError } = await supabase.rpc('setup_database');
    
    if (dbError) {
      throw new Error(`Database setup failed: ${dbError.message}`);
    }

    // Setup storage buckets
    await setupStorage();

    console.log('Database and storage setup completed successfully');
    return true;
  } catch (error) {
    handleError(error, 'setupDatabase');
    return false;
  }
}