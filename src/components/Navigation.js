export default function Navigation() {
  return `
    <nav class="flex items-center justify-between px-4 sm:px-8 py-4 bg-white sticky top-0 z-50">
      <div class="flex items-center space-x-4 sm:space-x-12">
        <div class="window-dots flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
          <div class="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
          <div class="w-3 h-3 rounded-full bg-[#28C840]"></div>
        </div>
        <a href="/" class="text-3xl font-black text-gray-800">Innovacion.ec</a>
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="/" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Inicio</a>
          <a href="/#servicios" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Servicios</a>
          <a href="/#precios" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Precios</a>
          <a href="/#equipo" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Nuestro Equipo</a>
          <a href="/blog" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Blog</a>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        id="mobileMenuButton"
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <!-- Contact Button -->
      <a 
        href="/#contact" 
        class="hidden md:block bg-[#FEBC2E] text-white px-8 py-3 rounded-xl text-[15px] font-medium hover:bg-[#e5aa29] transition-all duration-200 shadow-[0_8px_30px_rgb(254,188,46,0.3)] hover:shadow-[0_12px_40px_rgba(254,188,46,0.5)] hover:transform hover:-translate-y-0.5"
      >
        Hablemos
      </a>

      <!-- Mobile Menu Panel -->
      <div 
        id="mobileMenu" 
        class="hidden fixed top-[60px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50"
      >
        <div class="flex flex-col p-4 space-y-4">
          <a href="/" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Inicio</a>
          <a href="/#servicios" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Servicios</a>
          <a href="/#precios" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Precios</a>
          <a href="/#equipo" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Nuestro Equipo</a>
          <a href="/blog" class="text-[15px] font-medium text-gray-800 hover:text-[#FF5F57] transition-colors">Blog</a>
          <a 
            href="/#contact" 
            class="bg-[#FEBC2E] text-white px-6 py-2 rounded-lg text-[15px] font-medium hover:bg-[#e5aa29] transition-colors text-center"
          >
            Hablemos
          </a>
        </div>
      </div>
    </nav>
  `;
}