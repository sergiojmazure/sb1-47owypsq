import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';
import { AdminPostList } from '../../components/admin/PostList.js';
import { requireAuth } from '../../utils/auth.js';

export default async function PostListPage() {
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
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold">Posts</h1>
            <a 
              href="/admin/posts/new" 
              class="px-6 py-2 bg-[#FF5F57] text-white rounded-lg hover:bg-[#ff4f47] transition-colors"
            >
              Nuevo Post
            </a>
          </div>
          ${await AdminPostList()}
        </div>
        ${Footer()}
      </div>
    </div>
  `;
}