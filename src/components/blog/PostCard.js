import { formatDate } from '../../utils/dateFormatter.js';

export function PostCard({ post }) {
  if (!post) return '';
  
  const {
    slug,
    title,
    cover_image,
    published_at,
    excerpt,
    author_name,
    author_avatar,
    category_name
  } = post;

  return `
    <article class="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/3">
          <div class="h-48 md:h-full bg-gray-200 relative">
            ${cover_image ? `
              <img 
                src="${cover_image}" 
                alt="${title}" 
                class="absolute inset-0 w-full h-full object-cover"
              >
            ` : `
              <div class="absolute inset-0 bg-gradient-to-br from-[#FF5F57] to-[#FEBC2E] opacity-80"></div>
            `}
            <div class="absolute bottom-4 left-4">
              <span class="bg-white text-sm font-medium px-3 py-1 rounded-full">
                ${category_name || 'General'}
              </span>
            </div>
          </div>
        </div>
        <div class="md:w-2/3 p-6">
          <div class="flex items-center text-sm text-gray-500 mb-2">
            <span>${formatDate(published_at)}</span>
          </div>
          <h2 class="text-xl font-bold mb-2 hover:text-[#FF5F57] transition-colors">
            <a href="/blog/${slug}" class="hover:underline">${title}</a>
          </h2>
          <p class="text-gray-600 mb-4">${excerpt || ''}</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img 
                src="${author_avatar || '/images/team/sergio.png'}" 
                alt="${author_name || 'Sergio J. Mazure'}" 
                class="w-8 h-8 rounded-full mr-2 object-cover"
                onerror="this.src='/images/team/sergio.png'"
              >
              <span class="text-sm text-gray-600">${author_name || 'Sergio J. Mazure'}</span>
            </div>
            <a href="/blog/${slug}" class="inline-flex items-center text-[#FF5F57] font-medium hover:underline">
              Leer más
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}