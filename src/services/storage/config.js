export const STORAGE_CONFIG = {
  buckets: {
    blogImages: {
      name: 'blog-images',
      options: {
        public: true,
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        fileSizeLimit: 5242880 // 5MB
      }
    }
  }
};