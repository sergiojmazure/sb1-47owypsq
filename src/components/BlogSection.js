import { getAllPosts, getCategories } from '../services/blogService.js';
import PostList from './blog/PostList.js';
import CategoryFilter from './blog/CategoryFilter.js';

export default async function BlogSection() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getCategories()
  ]);

  const urlParams = new URLSearchParams(window.location.search);
  const activeCategory = urlParams.get('category');

  const filteredPosts = activeCategory
    ? posts.filter(post => post.categories.slug === activeCategory)
    : posts;

  return `
    <section class="py-12">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-4">Blog</h1>
        <p class="text-gray-600 text-center mb-12">Últimas novedades sobre IA y tecnología</p>
        
        ${CategoryFilter({ categories, activeCategory })}
        ${PostList({ posts: filteredPosts })}
      </div>
    </section>
  `;
}