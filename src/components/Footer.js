export default function Footer() {
  return `
    <footer class="py-8 text-center border-t border-gray-200">
      <div class="text-sm text-gray-600">
        <p>© ${new Date().getFullYear()} Innovacion.ec. All rights reserved.</p>
        <p class="mt-2">
          <a href="/privacy" class="text-blue-600 hover:text-blue-700 transition-colors">Política de Protección de datos</a>
        </p>
      </div>
    </footer>
  `;
}