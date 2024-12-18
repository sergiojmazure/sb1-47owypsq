export default function CategoryFilter({ categories, activeCategory }) {
  return `
    <div class="mb-8">
      <div class="flex flex-wrap gap-2">
        <a 
          href="/blog" 
          class="px-4 py-2 rounded-full text-sm font-medium ${!activeCategory ? 'bg-[#FF5F57] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors"
        >
          Todos
        </a>
        ${categories.map(category => `
          <a 
            href="/blog?category=${category.slug}" 
            class="px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category.slug ? 'bg-[#FF5F57] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors"
          >
            ${category.name}
          </a>
        `).join('')}
      </div>
    </div>
  `;
}