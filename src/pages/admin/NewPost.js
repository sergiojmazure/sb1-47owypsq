import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';
import { createPost } from '../../services/posts/postService.js';
import { slugify } from '../../utils/slugify.js';
import { requireAuth } from '../../utils/requireAuth.js';

export default async function NewPostPage() {
  // Check authentication
  const user = await requireAuth();
  if (!user) {
    window.location.href = '/admin/login';
    return '';
  }

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        ${Navigation()}
        <div class="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 class="text-3xl font-bold mb-8">Nuevo Post</h1>
          <form id="newPostForm" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Título</label>
              <input 
                type="text" 
                name="title" 
                id="postTitle"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
                required
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Slug</label>
              <input 
                type="text" 
                name="slug" 
                id="postSlug"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57] bg-gray-50"
                readonly
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Extracto</label>
              <textarea 
                name="excerpt" 
                rows="3"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Contenido</label>
              <textarea 
                name="content" 
                rows="10"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
                required
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
              <input 
                type="text" 
                name="category_name" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">URL de la imagen de portada</label>
              <input 
                type="url" 
                name="cover_image" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
              >
            </div>
            <div class="flex justify-end space-x-4">
              <a 
                href="/admin/posts" 
                class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </a>
              <button 
                type="submit"
                class="px-6 py-2 bg-[#FF5F57] text-white rounded-lg hover:bg-[#ff4f47] transition-colors"
              >
                Crear Post
              </button>
            </div>
          </form>
        </div>
        ${Footer()}
      </div>
    </div>
  `;
}