import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';
import { getAllPosts } from '../services/posts/postService.js';
import { PostList } from '../components/blog/PostList.js';

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        ${Navigation()}
        <div class="px-4 sm:px-8 py-12">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold text-center mb-4">Blog</h1>
            <p class="text-gray-600 text-center mb-12">
              ${posts.length ? 'Últimas novedades sobre IA y tecnología' : 'El blog está en construcción'}
            </p>
            ${PostList({ posts })}
          </div>
        </div>
        ${Footer()}
      </div>
    </div>
  `;
}