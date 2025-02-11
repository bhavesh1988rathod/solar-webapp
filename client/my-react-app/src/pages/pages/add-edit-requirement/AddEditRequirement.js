import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[800px] bg-white rounded-lg shadow-lg p-8">
    	    <div className="flex justify-center gap-4 mb-8">
    	        <button className="flex-1 py-3 px-6 rounded-lg font-medium border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-all transform hover:scale-[1.02]">
    	            Update Requirement Data
    	        </button>
    	        <button className="flex-1 py-3 px-6 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all transform hover:scale-[1.02]">
    	            Post New Requirement
    	        </button>
    	    </div>
    	
    	    <form className="space-y-6">
    	        <div className="grid grid-cols-2 gap-6">
    	            <div className="relative">
    	                <label className="block text-sm font-medium mb-2">Capacity</label>
    	                <details className="w-full">
    	                    <summary className="w-full p-3 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
    	                        Select Capacity
    	                    </summary>
    	                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
    	                        <div className="p-2 hover:bg-gray-50 cursor-pointer">100 KW</div>
    	                        <div className="p-2 hover:bg-gray-50 cursor-pointer">500 KW</div>
    	                        <div className="p-2 hover:bg-gray-50 cursor-pointer">1 MW</div>
    	                    </div>
    	                </details>
    	            </div>
    	
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Daily Energy Needs (KWh)</label>
    	                <input type="number" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter daily consumption" />
    	            </div>
    	        </div>
    	
    	        <div>
    	            <label className="block text-sm font-medium mb-2">Location</label>
    	            <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="City, State, Country" />
    	        </div>
    	
    	        <div className="flex items-center gap-4">
    	            <div className="flex items-center space-x-2">
    	                <input type="radio" name="installation-type" id="rooftop" className="w-5 h-5 border-gray-300 focus:ring-blue-500 transition-colors" />
    	                <label htmlFor="rooftop" className="text-sm font-medium">Rooftop Mount</label>
    	            </div>
    	            <div className="flex items-center space-x-2">
    	                <input type="radio" name="installation-type" id="ground" className="w-5 h-5 border-gray-300 focus:ring-blue-500 transition-colors" />
    	                <label htmlFor="ground" className="text-sm font-medium">Ground Mount</label>
    	            </div>
    	        </div>
    	
    	        <div className="grid grid-cols-2 gap-6">
    	            <div className="relative">
    	                <label className="block text-sm font-medium mb-2">Seasonal Changes</label>
    	                <details className="w-full">
    	                    <summary className="w-full p-3 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
    	                        Select Variation
    	                    </summary>
    	                    <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
    	                        <div className="p-2 hover:bg-gray-50 cursor-pointer">Minimal</div>
    	                        <div className="p-2 hover:bg-gray-50 cursor-pointer">Moderate</div>
    	                        <div className="p-2 hover:bg-gray-50 cursor-pointer">High</div>
    	                    </div>
    	                </details>
    	            </div>
    	
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Expected Rate per KWh</label>
    	                <div className="flex space-x-2">
    	                    <input type="number" step="0.01" className="w-3/4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter rate per KWh" />
    	                    <details className="w-1/4">
    	                        <summary className="w-full p-3 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
    	                            USD
    	                        </summary>
    	                        <div className="absolute z-10 right-0 mt-1 bg-white border rounded-lg shadow-lg w-24">
    	                            <div className="p-2 hover:bg-gray-50 cursor-pointer">USD</div>
    	                            <div className="p-2 hover:bg-gray-50 cursor-pointer">EUR</div>
    	                            <div className="p-2 hover:bg-gray-50 cursor-pointer">GBP</div>
    	                            <div className="p-2 hover:bg-gray-50 cursor-pointer">JPY</div>
    	                            <div className="p-2 hover:bg-gray-50 cursor-pointer">CNY</div>
    	                        </div>
    	                    </details>
    	                </div>
    	            </div>
    	        </div>
    	
    	        <div className="grid grid-cols-2 gap-6">
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Tenure of Contract (Years)</label>
    	                <input type="number" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter contract duration" />
    	            </div>
    	
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Lock-in Period (Months)</label>
    	                <input type="number" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter lock-in period" />
    	            </div>
    	        </div>
    	
    	        <div>
    	            <label className="block text-sm font-medium mb-2">Securities Offered</label>
    	            <textarea className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-24" placeholder="Describe securities offered" />
    	        </div>
    	
    	        <div className="relative">
    	            <label className="block text-sm font-medium mb-2">Consumption Voltage</label>
    	            <details className="w-full">
    	                <summary className="w-full p-3 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
    	                    Select Voltage
    	                </summary>
    	                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
    	                    <div className="p-2 hover:bg-gray-50 cursor-pointer">220V</div>
    	                    <div className="p-2 hover:bg-gray-50 cursor-pointer">440V</div>
    	                    <div className="p-2 hover:bg-gray-50 cursor-pointer">11KV</div>
    	                </div>
    	            </details>
    	        </div>
    	
    	        <div>
    	            <label className="block text-sm font-medium mb-2">Credit Rating Documents</label>
    	            <div className="relative">
    	                <input type="file" className="hidden" id="credit-rating" />
    	                <label htmlFor="credit-rating" className="block w-full p-3 border rounded-lg text-center cursor-pointer hover:bg-gray-50 transition-all">
    	                    <span className="material-symbols-outlined align-middle mr-2">upload_file</span>
    	                    Upload Credit Rating Documents
    	                </label>
    	            </div>
    	        </div>
    	
    	        <div>
    	            <label className="block text-sm font-medium mb-2">Financial Documents</label>
    	            <div className="relative">
    	                <input type="file" className="hidden" id="financial-docs" multiple />
    	                <label htmlFor="financial-docs" className="block w-full p-3 border rounded-lg text-center cursor-pointer hover:bg-gray-50 transition-all">
    	                    <span className="material-symbols-outlined align-middle mr-2">upload_file</span>
    	                    Upload Financial Documents
    	                </label>
    	            </div>
    	        </div>
    	
    	        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transform hover:scale-[1.02] transition-all">
    	            Submit Requirements
    	        </button>
    	    </form>
    	</div> 
            </div>
  )
}

