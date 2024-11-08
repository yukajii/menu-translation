import React, { useState } from 'react';
import { ArrowRight, Languages, QrCode, Clock } from 'lucide-react';

const LandingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xpwzdepz', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Multilingual Menus Made Simple
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Help international customers navigate your menu with ease. 
              Professional translations, QR code access, instant updates.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 py-20">
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
      </div>

      {/* How It Works */}
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-20">
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
      </div>

      {/* Demo Section */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">See It In Action</h2>
          <div className="bg-gray-100 p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Try Our Demo Menu</h3>
              <p className="mb-6 text-gray-700">
                Experience how your customers will interact with your translated menu. 
                Scan the QR code or click to view our demo restaurant menu.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => window.location.href = '/Khmel'}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Demo Menu
                </button>
                <button 
                  onClick={scrollToContact}
                  className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </button>
              </div>
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
      </div>

      {/* Pricing Section */}
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-20">
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
              onGetStarted={scrollToContact}
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
              onGetStarted={scrollToContact}
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-white" id="contact">
        <div className="container mx-auto px-4 py-20 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Get Started Today</h2>
          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p>We've received your message and will get back to you soon.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant Name
                </label>
                <input 
                  type="text" 
                  name="restaurant"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your restaurant name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea 
                  name="message"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Tell us about your needs"
                  required
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'} 
                  transition-colors`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
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
      </div>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Step = ({ number, title, description }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PriceCard = ({ title, price, period, features, highlighted = false, onGetStarted }) => (
  <div className={`p-8 rounded-lg shadow-sm ${highlighted ? 'bg-blue-600' : 'bg-white'}`}>
    <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h3>
    <div className="mb-6">
      <span className={`text-4xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
        {price}
      </span>
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
      onClick={onGetStarted}
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