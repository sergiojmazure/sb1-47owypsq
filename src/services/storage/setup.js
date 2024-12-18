import { supabase } from '../../lib/supabase.js';
import { STORAGE_CONFIG } from './config.js';
import { handleError } from '../../utils/errorHandler.js';

export async function setupStorage() {
  try {
    const { buckets } = STORAGE_CONFIG;
    
    for (const [key, bucket] of Object.entries(buckets)) {
      const { data: existingBucket } = await supabase
        .storage
        .getBucket(bucket.name);

      if (!existingBucket) {
        const { error } = await supabase.storage
          .createBucket(bucket.name, bucket.options);

        if (error && !error.message?.includes('already exists')) {
          console.warn(`Warning: Could not create bucket ${bucket.name}:`, error.message);
        }
      }
    }

    return true;
  } catch (error) {
    handleError(error, 'setupStorage');
    return false;
  }
}