import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[800px] bg-white rounded-lg shadow-lg p-8">
    	    <h2 className="text-2xl font-bold mb-6">Complete Your Registration</h2>
    	    <form className="space-y-6">
    	        <div className="grid grid-cols-2 gap-6">
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Name</label>
    	                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" required />
    	            </div>
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Surname</label>
    	                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" required />
    	            </div>
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Mobile Number</label>
    	                <div className="flex">
    	                    <details className="relative">
    	                        <summary className="px-3 py-2 border rounded-l-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-all">
    	                            +91
    	                        </summary>
    	                        <div className="absolute top-full left-0 w-48 mt-1 bg-white border rounded-lg shadow-lg z-10">
    	                            <div className="p-2 hover:bg-gray-50 cursor-pointer">+1 (USA)</div>
    	                            <div className="p-2 hover:bg-gray-50 cursor-pointer">+44 (UK)</div>
    	                            <div className="p-2 hover:bg-gray-50 cursor-pointer">+91 (India)</div>
    	                        </div>
    	                    </details>
    	                    <input type="tel" className="flex-1 px-4 py-2 border-y border-r rounded-r-lg focus:ring-2 focus:ring-blue-500 transition-all" required />
    	                </div>
    	            </div>
    	            <div>
    	                <label className="block text-sm font-medium mb-2">Address</label>
    	                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" required />
    	            </div>
    	        </div>
    	
    	        <div className="space-y-6">
    	            <h3 className="text-xl font-semibold">Power Requirements</h3>
    	            <div className="grid grid-cols-2 gap-6">
    	                <div>
    	                    <label className="block text-sm font-medium mb-2">Capacity</label>
    	                    <input type="number" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" placeholder="KW/MW" required />
    	                </div>
    	                <div>
    	                    <label className="block text-sm font-medium mb-2">Daily Energy Needs (KWh)</label>
    	                    <input type="number" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" required />
    	                </div>
    	                <div>
    	                    <label className="block text-sm font-medium mb-2">Location</label>
    	                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" placeholder="City, State, Country" required />
    	                </div>
    	                <div>
    	                    <label className="block text-sm font-medium mb-2">Preferred Solar Plant Type</label>
    	                    <div className="flex space-x-4">
    	                        <label className="flex items-center space-x-2 cursor-pointer">
    	                            <input type="radio" name="plantType" className="w-5 h-5 rounded focus:ring-2 focus:ring-blue-500 transition-all" />
    	                            <span>Rooftop</span>
    	                        </label>
    	                        <label className="flex items-center space-x-2 cursor-pointer">
    	                            <input type="radio" name="plantType" className="w-5 h-5 rounded focus:ring-2 focus:ring-blue-500 transition-all" />
    	                            <span>Ground Mount</span>
    	                        </label>
    	                    </div>
    	                </div>
    	                <div>
    	                    <label className="block text-sm font-medium mb-2">Expected Rate</label>
    	                    <div className="flex space-x-2">
    	                        <input type="number" className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" required />
    	                        <details className="relative">
    	                            <summary className="px-4 py-2 border rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-all">
    	                                INR
    	                            </summary>
    	                            <div className="absolute top-full right-0 w-24 mt-1 bg-white border rounded-lg shadow-lg z-10">
    	                                <div className="p-2 hover:bg-gray-50 cursor-pointer">USD</div>
    	                                <div className="p-2 hover:bg-gray-50 cursor-pointer">EUR</div>
    	                                <div className="p-2 hover:bg-gray-50 cursor-pointer">INR</div>
    	                            </div>
    	                        </details>
    	                    </div>
    	                </div>
    	                <div>
    	                    <label className="block text-sm font-medium mb-2">Securities Offered</label>
    	                    <details className="relative w-full">
    	                        <summary className="w-full px-4 py-2 border rounded-lg bg-white cursor-pointer hover:bg-gray-50 transition-all text-left flex items-center justify-between">
    	                            <span>Select Security Type</span>
    	                            <span className="material-symbols-outlined">expand_more</span>
    	                        </summary>
    	                        <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
    	                            <div className="p-4 space-y-4">
    	                                <label className="block">
    	                                    <input type="radio" name="security" className="mr-2 accent-blue-600" />
    	                                    Bank Guarantee
    	                                </label>
    	                                <label className="block">
    	                                    <input type="radio" name="security" className="mr-2 accent-blue-600" />
    	                                    Letter of Credit
    	                                </label>
    	                                <label className="block">
    	                                    <input type="radio" name="security" className="mr-2 accent-blue-600" />
    	                                    Corporate Guarantee
    	                                </label>
    	                            </div>
    	                        </div>
    	                    </details>
    	                </div>
    	            </div>
    	
    	            <div className="grid grid-cols-2 gap-6">
    	                <div>
    	                    <label className="block text-sm font-medium mb-2">Credit Rating Documents</label>
    	                    <label className="flex items-center justify-center w-full h-32 px-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
    	                        <div className="text-center">
    	                            <span className="material-symbols-outlined text-4xl mb-2">upload_file</span>
    	                            <p>Click to upload documents</p>
    	                        </div>
    	                        <input type="file" className="hidden" required />
    	                    </label>
    	                </div>
    	                <div>
    	                    <label className="block text-sm font-medium mb-2">Financial Documents</label>
    	                    <label className="flex items-center justify-center w-full h-32 px-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
    	                        <div className="text-center">
    	                            <span className="material-symbols-outlined text-4xl mb-2">upload_file</span>
    	                            <p>Click to upload documents</p>
    	                        </div>
    	                        <input type="file" multiple className="hidden" required />
    	                    </label>
    	                </div>
    	            </div>
    	
    	            <div>
    	                <label className="block text-sm font-medium mb-2">12 Months Electricity Invoices</label>
    	                <label className="flex items-center justify-center w-full h-40 px-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-all group">
    	                    <div className="text-center">
    	                        <span className="material-symbols-outlined text-5xl mb-3 text-blue-500 group-hover:scale-110 transition-transform">description</span>
    	                        <p className="font-medium">Drop your electricity bills here</p>
    	                        <p className="text-sm text-gray-500 mt-1">Upload last 12 months invoices (PDF or Image)</p>
    	                        <p className="text-xs text-gray-400 mt-2">Maximum 5MB per file</p>
    	                    </div>
    	                    <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" required />
    	                </label>
    	            </div>
    	        </div>
    	
    	        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-[1.02] transition-all">
    	            Complete Registration
    	        </button>
    	    </form>
    	</div> 
            </div>
  )
}

