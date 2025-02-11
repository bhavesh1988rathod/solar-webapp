import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[800px] bg-white rounded-lg shadow-lg p-8">
    	    <form className="space-y-6">
    	        <h2 className="text-2xl font-bold mb-8">Investor Registration</h2>
    	        
    	        <div className="grid grid-cols-2 gap-6">
    	            <div className="space-y-2">
    	                <label className="block font-medium">Name</label>
    	                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="Enter your full name" />
    	            </div>
    	            
    	            <div className="space-y-2">
    	                <label className="block font-medium">Surname</label>
    	                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="Enter your surname" />
    	            </div>
    	            
    	            <div className="space-y-2">
    	                <label className="block font-medium">Mobile Number</label>
    	                <div className="relative">
    	                    <select className="absolute left-3 top-1/2 -translate-y-1/2 border-none bg-transparent focus:ring-0 text-gray-500 w-20">
    	                        <option>+1</option>
    	                        <option>+44</option>
    	                        <option>+33</option>
    	                        <option>+49</option>
    	                        <option>+81</option>
    	                        <option>+86</option>
    	                    </select>
    	                    <input type="tel" className="w-full pl-24 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="Enter your number" />
    	                </div>
    	            </div>
    	            
    	            <div className="space-y-2">
    	                <label className="block font-medium">Investment Amount</label>
    	                <div className="relative">
    	                    <select className="absolute left-3 top-1/2 -translate-y-1/2 border-none bg-transparent focus:ring-0 text-gray-500 w-16">
    	                        <option>USD</option>
    	                        <option>EUR</option>
    	                        <option>GBP</option>
    	                    </select>
    	                    <input type="number" className="w-full pl-20 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="Enter amount" />
    	                </div>
    	            </div>
    	        </div>
    	
    	        <div className="space-y-2">
    	            <label className="block font-medium">Address</label>
    	            <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 h-24" placeholder="Enter your full address"></textarea>
    	        </div>
    	
    	        <div className="space-y-2">
    	            <label className="block font-medium">Investment Geographies</label>
    	            <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 h-24" placeholder="Enter countries, cities, or states you are interested in investing (separate with commas)"></textarea>
    	        </div>
    	
    	        <div className="space-y-2">
    	            <label className="block font-medium">Risk Appetite</label>
    	            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
    	                <option value="">Select Risk Level</option>
    	                <option value="low">Low</option>
    	                <option value="medium">Medium</option>
    	                <option value="high">High</option>
    	            </select>
    	        </div>
    	
    	        <div className="space-y-2">
    	            <label className="block font-medium">Tranche Preference</label>
    	            <div className="space-x-6">
    	                <label className="inline-flex items-center space-x-2 cursor-pointer">
    	                    <input type="radio" name="tranche" className="w-4 h-4 text-blue-500" />
    	                    <span>Single Tranche</span>
    	                </label>
    	                <label className="inline-flex items-center space-x-2 cursor-pointer">
    	                    <input type="radio" name="tranche" className="w-4 h-4 text-blue-500" />
    	                    <span>Multiple Tranches</span>
    	                </label>
    	            </div>
    	        </div>
    	
    	        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transform hover:scale-[1.02] transition duration-200">
    	            Complete Registration
    	        </button>
    	    </form>
    	</div> 
            </div>
  )
}

