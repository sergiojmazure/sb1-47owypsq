export default function FeaturesSection() {
  const features = [
    {
      icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
      title: "Asistentes de IA para Productividad",
      items: ["Asistentes preparados para optimizar las tareas clave de su empresa"]
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Proyectos de IA",
      items: ["Adaptamos la Inteligencia Artificial a sus necesidades"]
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      title: "Asistentes Personalizados",
      items: ["Creamos el asistente perfecto para los problemas de su negocio"]
    },
    {
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      title: "Consultorías en IA",
      items: ["Los mejores profesionales a su servicio a medida"]
    }
  ];

  return `
    <div id="servicios" class="bg-black rounded-3xl p-6 md:p-12 mb-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
        ${features.map(feature => `
          <div class="space-y-4">
            <div class="w-12 h-12 flex items-center justify-center border border-white rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${feature.icon}"></path>
              </svg>
            </div>
            <h3 class="text-lg md:text-xl font-semibold">${feature.title}</h3>
            <ul class="space-y-2 text-sm md:text-base text-gray-400">
              ${feature.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}