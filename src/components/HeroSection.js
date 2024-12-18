export default function HeroSection() {
  return `
    <div id="home" class="py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-6 text-center lg:text-left px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-700">
            Optimiza tus
            <br>
            costos con
            <br>
            <span class="text-[#FF5F57]">Inteligencia</span>
            <br>
            <span class="text-[#FEBC2E]">Artificial</span>
          </h1>
          <p class="text-gray-600 max-w-lg mx-auto lg:mx-0 text-base md:text-lg">
            Te ayudamos a optimizar y escalar tu negocio con soluciones tecnológicas personalizadas. Nuestra plataforma te ofrece herramientas de IA que potencian tus procesos de ventas, automatizan tareas críticas y mejoran la experiencia del cliente.
          </p>
        </div>
        <div class="hidden lg:flex justify-center items-center">
          <img 
            src="/images/innovacion-soluciones-ia-emprendedor.png" 
            alt="Sergio J. Mazure" 
            class="w-full max-w-md object-contain"
            style="max-height: 500px;"
          >
        </div>
      </div>
    </div>
  `;
}