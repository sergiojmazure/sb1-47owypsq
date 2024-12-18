import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';
import { getPostBySlug } from '../services/blogService.js';
import { PostHeader } from '../components/blog/PostHeader.js';
import { PostContent } from '../components/blog/PostContent.js';

export default async function BlogPost({ slug }) {
  const post = await getPostBySlug(slug);

  if (!post) {
    return `
      <div class="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 class="text-2xl font-bold mb-4">Post no encontrado</h1>
        <a href="/blog" class="text-[#FF5F57] hover:underline">Volver al blog</a>
      </div>
    `;
  }

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        ${Navigation()}
        <article class="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          ${PostHeader({ post })}
          ${PostContent({ content: post.content })}
        </article>
        ${Footer()}
      </div>
    </div>
  `;
}