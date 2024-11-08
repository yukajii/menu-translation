import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, QrCode, Settings, Clock } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">MenuTap</div>
            <nav>
              <Link to="/Khmel" className="text-blue-500 hover:text-blue-600">View Demo</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Multilingual Menus Made Simple
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Transform your restaurant menu into multiple languages instantly. 
                Help international customers order with confidence.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/Khmel" 
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  Try Demo Menu
                </Link>
                <a 
                  href="#pricing" 
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/api/placeholder/600/400"
                alt="Menu with QR code" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose MenuTap?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Languages className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Translation
              </h3>
              <p className="text-gray-700">
                AI-powered translations that maintain the nuance and style of your menu descriptions
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Access
              </h3>
              <p className="text-gray-700">
                Simple QR codes that let customers view your menu in their preferred language instantly
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Simple Setup
              </h3>
              <p className="text-gray-700">
                Upload your menu and get translations within 24 hours. No technical skills required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-700">
              Try our demo menu to experience the seamless translation feature
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-md w-full">
              <img 
                src="/api/placeholder/400/400"
                alt="QR Code" 
                className="w-full max-w-xs mx-auto mb-6"
              />
              <p className="text-center text-gray-700">
                Scan this QR code or{' '}
                <Link to="/Khmel" className="text-blue-500 hover:text-blue-600">
                  click here
                </Link>{' '}
                to view our demo menu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Go Global?
            </h2>
            <p className="text-xl mb-8">
              Start serving international customers better today
            </p>
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-500 hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              © 2024 MenuTap. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-700">Terms</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;