import React from 'react';
import { ArrowRight, Languages, QrCode, Clock } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Multilingual Menus Made Simple
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white">
              Help international customers navigate your menu with ease. 
              Professional translations, QR code access, instant updates.
            </p>
            <button 
              onClick={() => window.location.href = '#contact'} 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose MenuTap</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Languages className="w-12 h-12 text-blue-600" />}
              title="Professional Translation"
              description="Get your menu translated by professionals who understand culinary terminology and cultural nuances."
            />
            <FeatureCard 
              icon={<QrCode className="w-12 h-12 text-blue-600" />}
              title="Easy Access"
              description="Customers simply scan a QR code to view your menu in their preferred language."
            />
            <FeatureCard 
              icon={<Clock className="w-12 h-12 text-blue-600" />}
              title="Quick Updates"
              description="Update your menu anytime, and changes reflect immediately across all languages."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step number="1" title="Submit Your Menu" 
              description="Send us your menu in any format - PDF, images, or text." />
            <Step number="2" title="We Translate" 
              description="Our team translates your menu into your chosen languages." />
            <Step number="3" title="Start Using" 
              description="Receive your QR code and digital menu system ready to use." />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">See It In Action</h2>
          <div className="bg-gray-100 p-8 rounded-lg flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Try Our Demo Menu</h3>
              <p className="mb-6 text-gray-700">
                Experience how your customers will interact with your translated menu. 
                Scan the QR code or click to view our demo restaurant menu.
              </p>
              <button 
                onClick={() => window.location.href = '/Khmel'}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Demo Menu
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="w-48 h-48 bg-gray-200 rounded flex items-center justify-center text-gray-600">
                  QR Code Demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PriceCard 
              title="Standard"
              price="€29"
              period="per month"
              features={[
                "Up to 3 languages",
                "Unlimited menu updates",
                "QR code access",
                "Basic analytics",
                "Email support"
              ]}
            />
            <PriceCard 
              title="Premium"
              price="€49"
              period="per month"
              features={[
                "Up to 8 languages",
                "Unlimited menu updates",
                "Custom QR code design",
                "Advanced analytics",
                "Priority support",
                "API access"
              ]}
              highlighted={true}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white w-full">
        <div className="w-full max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Get Started Today</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Name
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your restaurant name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Tell us about your needs"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MenuTap</h3>
              <p className="text-gray-400">
                Making restaurant menus accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: hello@menutap.biz<br />
                Location: Berlin, Germany
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} MenuTap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Step = ({ number, title, description }) => (
  <div className="text-center p-6 bg-white rounded-lg">
    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PriceCard = ({ title, price, period, features, highlighted = false }) => (
  <div className={`p-8 rounded-lg ${highlighted ? 'bg-blue-600' : 'bg-white'}`}>
    <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <div className="mb-6">
      <span className={`text-4xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>{price}</span>
      <span className={highlighted ? 'text-blue-100' : 'text-gray-600'}>
        {period}
      </span>
    </div>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <svg
            className={`w-5 h-5 flex-shrink-0 ${highlighted ? 'text-white' : 'text-blue-600'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className={highlighted ? 'text-white' : 'text-gray-700'}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    <button 
      className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors
        ${highlighted 
          ? 'bg-white text-blue-600 hover:bg-blue-50' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
    >
      Get Started
    </button>
  </div>
);

export default LandingPage;