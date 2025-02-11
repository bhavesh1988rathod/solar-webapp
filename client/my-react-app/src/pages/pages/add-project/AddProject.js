import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[800px] bg-white rounded-lg shadow-lg p-8">
    	    <form className="space-y-6">
    	        <div className="space-y-2">
    	            <label className="block text-sm font-medium">Project Name</label>
    	            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300" placeholder="Enter project name"/>
    	        </div>
    	
    	        <div className="space-y-2">
    	            <label className="block text-sm font-medium">Location</label>
    	            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300" placeholder="Enter project location"/>
    	        </div>
    	
    	        <div className="grid grid-cols-2 gap-6">
    	            <div className="space-y-2">
    	                <label className="block text-sm font-medium">Location Image</label>
    	                <div className="relative">
    	                    <input type="file" accept="image/*" className="hidden" id="location-image"/>
    	                    <label htmlFor="location-image" className="w-full h-[150px] flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500 transition-all duration-200">
    	                        <span className="material-symbols-outlined text-4xl text-gray-400">add_photo_alternate</span>
    	                    </label>
    	                </div>
    	            </div>
    	            <div className="space-y-2">
    	                <label className="block text-sm font-medium">Project Thumbnail</label>
    	                <div className="relative">
    	                    <input type="file" accept="image/*" className="hidden" id="thumbnail-image"/>
    	                    <label htmlFor="thumbnail-image" className="w-full h-[150px] flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500 transition-all duration-200">
    	                        <span className="material-symbols-outlined text-4xl text-gray-400">image</span>
    	                    </label>
    	                </div>
    	            </div>
    	        </div>
    	
    	        <div className="grid grid-cols-2 gap-6">
    	            <div className="space-y-2">
    	                <label className="block text-sm font-medium">Capacity</label>
    	                <div className="relative">
    	                    <input type="number" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300" placeholder="Enter capacity"/>
    	                    <select className="absolute right-0 top-0 h-full px-3 border-l bg-gray-50 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    	                        <option>KW</option>
    	                        <option>MW</option>
    	                    </select>
    	                </div>
    	            </div>
    	
    	            <div className="space-y-2">
    	                <label className="block text-sm font-medium">Expected ROI (%)</label>
    	                <input type="number" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300" placeholder="Enter expected ROI"/>
    	            </div>
    	        </div>
    	
    	        <div className="space-y-2">
    	            <label className="block text-sm font-medium">Minimum Investment Required ($)</label>
    	            <input type="number" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300" placeholder="Enter minimum investment"/>
    	        </div>
    	
    	        <div className="space-y-2">
    	            <label className="block text-sm font-medium">Project Status</label>
    	            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-300">
    	    <option value="open">Open for Investment</option>
    	    <option value="closed">Closed for Investment</option>
    	</select>
    	        </div>
    	
    	        <div className="flex space-x-4 pt-4">
    	            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200">
    	                <span className="material-symbols-outlined align-middle mr-2">save</span>
    	                Save
    	            </button>
    	            <button type="button" className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-200">
    	                <span className="material-symbols-outlined align-middle mr-2">delete</span>
    	                Delete
    	            </button>
    	            <button type="button" className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transform hover:scale-105 transition-all duration-200">
    	                <span className="material-symbols-outlined align-middle mr-2">cancel</span>
    	                Cancel
    	            </button>
    	        </div>
    	    </form>
    	</div> 
            </div>
  )
}

