import Navigation from '../components/Navigation.js';
import HeroSection from '../components/HeroSection.js';
import FeaturesSection from '../components/FeaturesSection.js';
import PricingSection from '../components/PricingSection.js';
import TeamSection from '../components/TeamSection.js';
import ContactSection from '../components/ContactSection.js';
import Footer from '../components/Footer.js';

export default function HomePage() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        ${Navigation()}
        <div class="px-4 sm:px-8">
          ${HeroSection()}
          ${FeaturesSection()}
          ${PricingSection()}
          ${TeamSection()}
          ${ContactSection()}
          ${Footer()}
        </div>
      </div>
    </div>
  `;
}