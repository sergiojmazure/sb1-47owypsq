export function PostContent({ content }) {
  return `
    <div class="prose prose-lg max-w-none">
      ${content}
    </div>
  `;
}