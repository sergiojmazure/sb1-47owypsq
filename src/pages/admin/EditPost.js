import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';
import { getPostBySlug, updatePost } from '../../services/posts/postService.js';
import { requireAuth } from '../../utils/requireAuth.js';

export default async function EditPostPage({ slug }) {
  // Check authentication
  const user = await requireAuth();
  if (!user) {
    window.location.href = '/admin/login';
    return '';
  }

  const post = await getPostBySlug(slug);
  
  if (!post) {
    return `
      <div class="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 class="text-2xl font-bold mb-4">Post no encontrado</h1>
        <a href="/admin/posts" class="text-[#FF5F57] hover:underline">Volver al panel</a>
      </div>
    `;
  }

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        ${Navigation()}
        <div class="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 class="text-3xl font-bold mb-8">Editar Post</h1>
          <form id="editPostForm" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Título</label>
              <input 
                type="text" 
                name="title" 
                value="${post.title}"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
                required
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Extracto</label>
              <textarea 
                name="excerpt" 
                rows="3"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
              >${post.excerpt || ''}</textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Contenido</label>
              <textarea 
                name="content" 
                rows="10"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
                required
              >${post.content || ''}</textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Categorías (separadas por comas)</label>
              <input 
                type="text" 
                name="categories" 
                value="${(post.categories || []).join(', ')}"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
                placeholder="Tecnología, IA, Negocios"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">URL del avatar del autor</label>
              <input 
                type="url" 
                name="author_avatar" 
                value="${post.author_avatar || ''}"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57]"
                placeholder="https://ejemplo.com/avatar.jpg"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">URL de la imagen de portada</label>
              <input 
                type="url" 
                name="cover_image" 
                value="${post.cover_image || ''}"
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
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
        ${Footer()}
      </div>
    </div>
  `;
}