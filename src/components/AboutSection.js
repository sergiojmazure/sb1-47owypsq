export default function AboutSection() {
  const team = [
    {
      name: "Sergio J. Mazure",
      role: "CEO & Fundador",
      image: "/images/team/sergio.png",
      bio: "Experto en IA y Estrategias de Comunicación"
    },
    {
      name: "Jaime Jara",
      role: "CTO",
      image: "/images/team/jaime.png",
      bio: "Especialista en Procesos de Negocio"
    },
    {
      name: "Daniel Villalba",
      role: "Director Comercial",
      image: "/images/team/daniel.png",
      bio: "Experto en Marketing y Ventas"
    }
  ];

  return `
    <section id="equipo" class="py-12">
      <h2 class="text-4xl font-bold text-center mb-4">Acerca de Nosotros</h2>
      <p class="text-gray-600 text-center mb-12">Conoce al equipo detrás de nuestras soluciones de IA</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6 md:px-0">
        ${team.map(member => `
          <div class="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <img src="${member.image}" alt="${member.name}" class="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover">
            <h3 class="text-lg md:text-xl font-bold mb-2">${member.name}</h3>
            <p class="text-blue-600 text-sm md:text-base mb-2">${member.role}</p>
            <p class="text-gray-600 text-sm md:text-base">${member.bio}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}