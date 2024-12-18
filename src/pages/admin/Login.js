import { signIn } from '../../services/authService.js';
import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';

export default function LoginPage() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        ${Navigation()}
        <div class="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8">
            <div>
              <h2 class="text-center text-3xl font-bold text-gray-900">Admin Login</h2>
              <p class="mt-2 text-center text-sm text-gray-600">
                Accede al panel de administración
              </p>
            </div>
            <form id="loginForm" class="mt-8 space-y-6">
              <div class="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="email" class="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#FF5F57] focus:border-[#FF5F57] focus:z-10 sm:text-sm"
                    placeholder="Email"
                  >
                </div>
                <div>
                  <label for="password" class="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#FF5F57] focus:border-[#FF5F57] focus:z-10 sm:text-sm"
                    placeholder="Password"
                  >
                </div>
              </div>
              <div id="loginError" class="text-red-500 text-sm text-center hidden"></div>
              <div>
                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF5F57] hover:bg-[#ff4f47] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5F57]"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
        ${Footer()}
      </div>
    </div>
  `;
}