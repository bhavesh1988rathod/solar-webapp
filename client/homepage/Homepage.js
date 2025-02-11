import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[1200px] bg-white">
    	  <section className="relative h-[600px] bg-gradient-to-br from-blue-600 to-blue-800">
    	    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276')] bg-cover bg-center mix-blend-overlay opacity-20" />
    	    <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
    	      <h1 className="text-6xl font-bold mb-4 transform hover:scale-105 transition-transform">
    	        Global Solar Investment Hub
    	      </h1>
    	      <p className="text-2xl mb-12 opacity-90">
    	        Connecting solar projects with investors worldwide
    	      </p>
    	      <div className="flex gap-6">
    	        <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all shadow-lg">
    	          Join Global Investor Network
    	        </button>
    	        <button className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all">
    	          List International Projects
    	        </button>
    	      </div>
    	    </div>
    	  </section>
    	
    	  <section className="py-20 px-12">
    	    <h2 className="text-4xl font-bold text-center mb-16">Global Investment Platform</h2>
    	    <div className="grid grid-cols-3 gap-8">
    	      <div className="p-8 rounded-xl bg-gray-50 hover:shadow-xl transition-all group">
    	        <span className="material-symbols-outlined text-6xl text-blue-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	          public
    	        </span>
    	        <h3 className="text-2xl font-semibold mb-4">Worldwide Access</h3>
    	        <p className="text-gray-600">Connect with solar projects and investors from across the globe.</p>
    	      </div>
    	      <div className="p-8 rounded-xl bg-gray-50 hover:shadow-xl transition-all group">
    	        <span className="material-symbols-outlined text-6xl text-blue-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	          currency_exchange
    	        </span>
    	        <h3 className="text-2xl font-semibold mb-4">Multi-Currency Support</h3>
    	        <p className="text-gray-600">Invest and receive returns in your preferred currency.</p>
    	      </div>
    	      <div className="p-8 rounded-xl bg-gray-50 hover:shadow-xl transition-all group">
    	        <span className="material-symbols-outlined text-6xl text-blue-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	          hub
    	        </span>
    	        <h3 className="text-2xl font-semibold mb-4">Global Network</h3>
    	        <p className="text-gray-600">Access diverse investment opportunities across continents.</p>
    	      </div>
    	    </div>
    	  </section>
    	
    	  <section className="py-20 px-12 bg-gradient-to-br from-blue-50 to-white">
    	    <h2 className="text-4xl font-bold text-center mb-16">International Investment Benefits</h2>
    	    <div className="grid grid-cols-3 gap-8">
    	      <div className="p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all group">
    	        <span className="material-symbols-outlined text-6xl text-green-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	          real_estate_agent
    	        </span>
    	        <h3 className="text-2xl font-semibold mb-4">Physical Assets Backing</h3>
    	        <p className="text-gray-600">Investments backed by revenue-generating solar infrastructure.</p>
    	      </div>
    	      <div className="p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all group">
    	        <span className="material-symbols-outlined text-6xl text-green-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	          trending_up
    	        </span>
    	        <h3 className="text-2xl font-semibold mb-4">Inflation Protection</h3>
    	        <p className="text-gray-600">Natural hedge against inflation through real asset ownership.</p>
    	      </div>
    	      <div className="p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all group">
    	        <span className="material-symbols-outlined text-6xl text-green-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	          deployed_code
    	        </span>
    	        <h3 className="text-2xl font-semibold mb-4">Curated Projects</h3>
    	        <p className="text-gray-600">Carefully selected projects tailored to your investment needs.</p>
    	      </div>
    	    </div>
    	  </section>
    	
    	  <section className="py-20 px-12 bg-gray-50">
    	    <h2 className="text-4xl font-bold text-center mb-16">Global Platform Features</h2>
    	    <div className="grid grid-cols-2 gap-12">
    	      <div className="group">
    	        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
    	          <span className="material-symbols-outlined text-5xl text-blue-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	            translate
    	          </span>
    	          <h3 className="text-2xl font-semibold mb-4">Multi-Language Support</h3>
    	          <p className="text-gray-600">Platform available in multiple languages for global accessibility.</p>
    	        </div>
    	      </div>
    	      <div className="group">
    	        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
    	          <span className="material-symbols-outlined text-5xl text-blue-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	            payments
    	          </span>
    	          <h3 className="text-2xl font-semibold mb-4">International Payments</h3>
    	          <p className="text-gray-600">Secure cross-border transaction infrastructure.</p>
    	        </div>
    	      </div>
    	      <div className="group">
    	        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
    	          <span className="material-symbols-outlined text-5xl text-blue-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	            gavel
    	          </span>
    	          <h3 className="text-2xl font-semibold mb-4">Regulatory Compliance</h3>
    	          <p className="text-gray-600">Adherence to international investment regulations.</p>
    	        </div>
    	      </div>
    	      <div className="group">
    	        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
    	          <span className="material-symbols-outlined text-5xl text-blue-600 mb-4 group-hover:scale-110 transition-transform inline-block">
    	            support_agent
    	          </span>
    	          <h3 className="text-2xl font-semibold mb-4">24/7 Global Support</h3>
    	          <p className="text-gray-600">Round-the-clock assistance across all time zones.</p>
    	        </div>
    	      </div>
    	    </div>
    	  </section>
    	
    	  <footer className="bg-gray-900 text-white py-16">
    	    <nav className="max-w-6xl mx-auto grid grid-cols-4 gap-8 px-8">
    	      <div>
    	        <h4 className="text-lg font-semibold mb-4">Global Network</h4>
    	        <ul className="space-y-2">
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Americas</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Europe</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Asia Pacific</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Middle East</a></li>
    	        </ul>
    	      </div>
    	      <div>
    	        <h4 className="text-lg font-semibold mb-4">International Investors</h4>
    	        <ul className="space-y-2">
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Global Investment Guide</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Market Analysis</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Currency Exchange</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Global Success Stories</a></li>
    	        </ul>
    	      </div>
    	      <div>
    	        <h4 className="text-lg font-semibold mb-4">Legal & Compliance</h4>
    	        <ul className="space-y-2">
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">International Privacy Policy</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Global Terms of Service</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Regulatory Information</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Investment Guidelines</a></li>
    	        </ul>
    	      </div>
    	      <div>
    	        <h4 className="text-lg font-semibold mb-4">Global Resources</h4>
    	        <ul className="space-y-2">
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Global News</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Market Reports</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">International FAQ</a></li>
    	          <li><a href="#" className="hover:text-blue-400 transition-colors">Global Support</a></li>
    	        </ul>
    	      </div>
    	    </nav>
    	    <div className="mt-12 text-center text-gray-400">
    	      <p>© 2024 SolarWebApp Global. All rights reserved.</p>
    	    </div>
    	  </footer>
    	</div> 
            </div>
  )
}

