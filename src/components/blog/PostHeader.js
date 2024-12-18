import { formatDate } from '../../utils/dateFormatter.js';

export function PostHeader({ post }) {
  const {
    title,
    published_at,
    read_time = 5,
    category_name = 'Sin categoría',
    author_name,
    author_avatar,
    cover_image
  } = post;

  return `
    <header class="mb-8">
      <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
        <span class="bg-[#FF5F57] text-white px-3 py-1 rounded-full">
          ${category_name}
        </span>
        <span>•</span>
        <time datetime="${published_at}">${formatDate(published_at)}</time>
        <span>•</span>
        <span>${read_time} min de lectura</span>
      </div>
      
      <h1 class="text-4xl font-bold mb-6">${title}</h1>
      
      <div class="flex items-center space-x-4">
        <img 
          src="${author_avatar || '/images/team/sergio.png'}" 
          alt="${author_name || 'Sergio J. Mazure'}" 
          class="w-12 h-12 rounded-full object-cover"
          onerror="this.src='/images/team/sergio.png'"
        >
        <div>
          <div class="font-medium">${author_name || 'Sergio J. Mazure'}</div>
          <div class="text-sm text-gray-500">Experto en IA y Estrategias de Comunicación</div>
        </div>
      </div>

      ${cover_image ? `
        <div class="mt-8">
          <img 
            src="${cover_image}" 
            alt="${title}" 
            class="w-full h-[400px] object-cover rounded-xl"
          >
        </div>
      ` : ''}
    </header>
  `;
}