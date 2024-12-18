import { PostCard } from './PostCard.js';

export function PostList({ posts = [] }) {
  if (!posts.length) {
    return `
      <div class="text-center py-12">
        <p class="text-gray-600">No hay posts disponibles en este momento.</p>
      </div>
    `;
  }

  return `
    <div class="grid gap-8">
      ${posts.map(post => PostCard({ post })).join('')}
    </div>
  `;
}