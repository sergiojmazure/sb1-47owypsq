export default function PricingSection() {
  const plans = [
    {
      name: "Básico",
      price: "549",
      value: "basico",
      features: [
        "Adaptación de un Asistente IA",
        "Implementación con sus datos",
        "Webchat para Sitio Web",
        "Integración con Redes Sociales",
        "Soporte por email"
      ]
    },
    {
      name: "Profesional",
      price: "799",
      value: "profesional",
      features: [
        "Agentes de Voz y Texto",
        "Implementación con sus datos",
        "Gestión de Citas",
        "Soporte prioritario personal",
        "Desde 1000 minutos en llamadas"
      ],
      highlighted: true
    },
    {
      name: "Empresarial",
      price: "1049",
      value: "empresarial",
      features: [
        "Adaptación a medida",
        "Call Centers con IA",
        "Generación a medida de contenidos",
        "Dashboard exclusivo de analíticas",
        "Desde 5000 minutos en llamadas"
      ]
    }
  ];

  return `
    <section id="precios" class="py-12">
      <h2 class="text-4xl font-bold text-center mb-4">Planes y Precios</h2>
      <p class="text-gray-600 text-center mb-12">Elige el plan que mejor se adapte a tus necesidades</p>
      <div class="grid grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 md:px-0">
        ${plans.map(plan => `
          <div class="${plan.highlighted ? 'bg-[#FEBC2E] text-white' : 'bg-white'} rounded-2xl p-6 md:p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4">${plan.name}</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">$${plan.price}</span>
              <span class="text-sm">/mes*</span>
            </div>
            <ul class="space-y-4 mb-8">
              ${plan.features.map(feature => `
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm md:text-base">${feature}</span>
                </li>
              `).join('')}
            </ul>
            <button 
              onclick="document.getElementById('planSelect').value='${plan.value}'; document.getElementById('contact').scrollIntoView({behavior: 'smooth'})"
              class="${plan.highlighted ? 'bg-white text-[#FEBC2E] hover:bg-gray-100' : 'bg-[#FEBC2E] text-white hover:bg-[#e5aa29]'} w-full py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Seleccionar Plan
            </button>
          </div>
        `).join('')}
      </div>
      <p class="text-xs text-gray-600 text-center mt-4">* Los precios pueden variar en función del consumo de los asistentes.</p>
    </section>
  `;
}