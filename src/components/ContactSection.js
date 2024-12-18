export default function ContactSection() {
  return `
    <section id="contact" class="py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div id="contactHeader">
          <h2 class="text-4xl font-bold text-center mb-4">Hablemos</h2>
          <p class="text-gray-600 text-center mb-12">¿Tienes alguna pregunta? Estamos aquí para ayudarte.</p>
        </div>
        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          <form id="contactForm" class="space-y-6" action="https://hook.us1.make.com/zy65bt675x116p6uuezniihk8hme2mo0" method="POST">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input 
                  name="nombre" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57] focus:border-[#FF5F57]" 
                  placeholder="Tu nombre" 
                  required
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  name="email" 
                  type="email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57] focus:border-[#FF5F57]" 
                  placeholder="tu@email.com" 
                  required
                >
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Plan de Interés</label>
                <select 
                  name="plan" 
                  id="planSelect" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57] focus:border-[#FF5F57]" 
                  required
                >
                  <option value="">Selecciona un plan</option>
                  <option value="basico">Plan Básico</option>
                  <option value="profesional">Plan Profesional</option>
                  <option value="empresarial">Plan Empresarial</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                <input 
                  name="asunto" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57] focus:border-[#FF5F57]" 
                  placeholder="¿Cómo podemos ayudarte?" 
                  required
                >
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea 
                name="mensaje" 
                rows="4" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F57] focus:border-[#FF5F57]" 
                placeholder="Escribe tu mensaje aquí..." 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="w-full bg-[#28C840] text-white py-3 px-6 rounded-lg hover:bg-[#25b439] transition-colors text-sm md:text-base"
            >
              Enviar Mensaje
            </button>
          </form>
          <div id="thankYouMessage" class="hidden text-center py-8">
            <h2 class="text-4xl font-bold text-center mb-4">¡Estamos en contacto!</h2>
            <p class="text-gray-600">Gracias</p>
          </div>
        </div>
      </div>
    </section>
  `;
}