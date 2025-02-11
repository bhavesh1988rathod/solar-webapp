import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[600px] bg-white rounded-xl shadow-lg p-8">
    	    <h2 className="text-2xl font-semibold mb-6 text-center">Update Profile</h2>
    	    <form className="space-y-6">
    	        <div className="relative">
    	            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2">person</span>
    	            <input 
    	                type="text"
    	                placeholder="Full Name"
    	                className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg outline-none transition-all duration-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
    	            />
    	        </div>
    	
    	        <div className="relative">
    	            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2">person_4</span>
    	            <input 
    	                type="text"
    	                placeholder="Surname"
    	                className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg outline-none transition-all duration-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
    	            />
    	        </div>
    	
    	        <div className="relative">
    	            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2">phone</span>
    	            <input 
    	                type="tel"
    	                placeholder="Mobile Number"
    	                className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg outline-none transition-all duration-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
    	            />
    	        </div>
    	
    	        <div className="relative">
    	            <span className="material-symbols-outlined absolute left-3 top-10 -translate-y-1/2">home</span>
    	            <textarea 
    	                placeholder="Address"
    	                rows="4"
    	                className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg outline-none transition-all duration-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 resize-none"
    	            />
    	        </div>
    	
    	        <button
    	            type="submit"
    	            className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-600 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
    	        >
    	            <span className="material-symbols-outlined">update</span>
    	            Update Profile
    	        </button>
    	    </form>
    	</div> 
            </div>
  )
}

