import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[400px] bg-white rounded-lg shadow-xl p-8">
    	    <header className="text-center mb-8">
    	        <h1 className="text-2xl font-bold mb-2">Forgot Password</h1>
    	        <p className="text-sm">Enter your email address to reset your password</p>
    	    </header>
    	
    	    <form className="space-y-6">
    	        <div className="relative">
    	            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2">mail</span>
    	            <input 
    	                type="email" 
    	                placeholder="Enter your email"
    	                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
    	            />
    	        </div>
    	
    	        <button 
    	            type="submit"
    	            className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-xl"
    	        >
    	            Send Reset Link
    	        </button>
    	
    	        <div className="text-center">
    	            <a 
    	                href="#" 
    	                className="inline-flex items-center gap-2 text-sm hover:text-blue-600 transition-colors duration-300"
    	            >
    	                <span className="material-symbols-outlined text-sm">arrow_back</span>
    	                Back to Login
    	            </a>
    	        </div>
    	    </form>
    	
    	    <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm">
    	        <p>Need help? <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">Contact Support</a></p>
    	    </div>
    	</div> 
            </div>
  )
}

