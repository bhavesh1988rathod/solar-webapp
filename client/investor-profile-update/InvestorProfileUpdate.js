import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[800px] bg-white rounded-lg shadow-lg p-8">
    	    <h1 className="text-2xl font-bold mb-8 text-center">Update Profile</h1>
    	    <form className="space-y-6">
    	        <div className="grid grid-cols-2 gap-6">
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Name</label>
    	                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
    	            </div>
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Surname</label>
    	                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
    	            </div>
    	        </div>
    	
    	        <div>
    	            <label className="block text-sm font-medium mb-2">Mobile Number</label>
    	            <div className="flex gap-2">
    	                <details className="relative w-[120px]">
    	                    <summary className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200 flex items-center justify-between">
    	                        <span>+1</span>
    	                        <span className="material-symbols-outlined text-sm">expand_more</span>
    	                    </summary>
    	                    <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-[200px] overflow-y-auto">
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">+1 (USA)</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">+44 (UK)</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">+81 (JP)</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">+86 (CN)</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">+91 (IN)</div>
    	                    </div>
    	                </details>
    	                <input type="tel" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Enter mobile number" />
    	            </div>
    	        </div>
    	
    	        <div>
    	            <label className="block text-sm font-medium mb-2">Address</label>
    	            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 h-24"></textarea>
    	        </div>
    	
    	        <div>
    	            <label className="block text-sm font-medium mb-2">Investment Amount</label>
    	            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
    	        </div>
    	
    	        <div className="grid grid-cols-3 gap-6">
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Country</label>
    	                <details className="relative">
    	                    <summary className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200">Select Country</summary>
    	                    <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">United States</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">Canada</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">United Kingdom</div>
    	                    </div>
    	                </details>
    	            </div>
    	
    	            <div>
    	                <label className="block text-sm font-medium mb-2">State</label>
    	                <details className="relative">
    	                    <summary className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200">Select State</summary>
    	                    <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">California</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">New York</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">Texas</div>
    	                    </div>
    	                </details>
    	            </div>
    	
    	            <div>
    	                <label className="block text-sm font-medium mb-2">City</label>
    	                <details className="relative">
    	                    <summary className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200">Select City</summary>
    	                    <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">Los Angeles</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">San Francisco</div>
    	                        <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">San Diego</div>
    	                    </div>
    	                </details>
    	            </div>
    	        </div>
    	
    	        <div>
    	            <label className="block text-sm font-medium mb-2">Risk Appetite</label>
    	            <details className="relative">
    	                <summary className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200">Select Risk Level</summary>
    	                <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
    	                    <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">Low</div>
    	                    <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">Medium</div>
    	                    <div className="p-2 hover:bg-gray-100 cursor-pointer transition-all duration-200">High</div>
    	                </div>
    	            </details>
    	        </div>
    	
    	        <div>
    	            <label className="block text-sm font-medium mb-4">Tranche Preference</label>
    	            <div className="space-x-6">
    	                <label className="inline-flex items-center cursor-pointer group">
    	                    <input type="radio" name="tranche" className="w-4 h-4 text-blue-500 transition-all duration-200" />
    	                    <span className="ml-2 group-hover:text-blue-500 transition-all duration-200">Single Tranche</span>
    	                </label>
    	                <label className="inline-flex items-center cursor-pointer group">
    	                    <input type="radio" name="tranche" className="w-4 h-4 text-blue-500 transition-all duration-200" />
    	                    <span className="ml-2 group-hover:text-blue-500 transition-all duration-200">Multiple Tranches</span>
    	                </label>
    	            </div>
    	        </div>
    	
    	        <button className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200">
    	            Update Profile
    	        </button>
    	    </form>
    	</div> 
            </div>
  )
}

