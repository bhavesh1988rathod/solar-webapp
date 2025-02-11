import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-full max-w-[400px] bg-white rounded-lg shadow-xl p-4 sm:p-8 mx-auto">
    	    <header className="mb-6 sm:mb-8">
    	        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome Back</h1>
    	        <p className="text-neutral-600">Please enter your details to sign in</p>
    	    </header>
    	
    	    <form className="space-y-4 sm:space-y-6">
    	        <div className="space-y-2">
    	            <label className="block text-sm font-medium">Email</label>
    	            <input 
    	                type="email" 
    	                placeholder="Enter your email"
    	                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
    	            />
    	        </div>
    	
    	        <div className="space-y-2">
    	            <label className="block text-sm font-medium">Password</label>
    	            <input 
    	                type="password" 
    	                placeholder="Enter your password"
    	                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
    	            />
    	        </div>
    	
    	        <div className="flex justify-end">
    	            <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200">
    	                Forgot Password?
    	            </a>
    	        </div>
    	
    	        <button 
    	            type="submit"
    	            className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transform hover:-translate-y-0.5 transition-all duration-200"
    	        >
    	            Login
    	        </button>
    	
    	        <div className="relative flex items-center gap-2 py-3 sm:py-4">
    	            <div className="flex-grow border-t border-neutral-300" />
    	            <span className="text-xs sm:text-sm text-neutral-600">or continue with</span>
    	            <div className="flex-grow border-t border-neutral-300" />
    	        </div>
    	
    	        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
    	            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200">
    	                <i className="fa-brands fa-google text-lg sm:text-xl" />
    	                <span className="text-xs sm:text-sm font-medium hidden sm:inline">Google</span>
    	            </button>
    	            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200">
    	                <i className="fa-brands fa-facebook text-lg sm:text-xl text-blue-600" />
    	                <span className="text-xs sm:text-sm font-medium hidden sm:inline">Facebook</span>
    	            </button>
    	            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200">
    	                <i className="fa-brands fa-apple text-lg sm:text-xl" />
    	                <span className="text-xs sm:text-sm font-medium hidden sm:inline">Apple</span>
    	            </button>
    	            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200">
    	                <i className="fa-brands fa-linkedin text-lg sm:text-xl text-blue-700" />
    	                <span className="text-xs sm:text-sm font-medium hidden sm:inline">LinkedIn</span>
    	            </button>
    	            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200">
    	                <i className="fa-brands fa-microsoft text-lg sm:text-xl text-blue-500" />
    	                <span className="text-xs sm:text-sm font-medium hidden sm:inline">Microsoft</span>
    	            </button>
    	        </div>
    	    </form>
    	
    	    <footer className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-neutral-200">
    	        <div className="space-y-3 sm:space-y-4 text-center">
    	            <p className="text-neutral-600 text-xs sm:text-sm">Don't have an account?</p>
    	            <div className="space-y-2 sm:space-y-3">
    	                <a 
    	                    href="/register/investor" 
    	                    className="block w-full py-2 sm:py-2.5 border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200 text-sm"
    	                >
    	                    Register as an Investor
    	                </a>
    	                <a 
    	                    href="/register/consumer" 
    	                    className="block w-full py-2 sm:py-2.5 border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200 text-sm"
    	                >
    	                    Register as a Consumer
    	                </a>
    	            </div>
    	        </div>
    	    </footer>
    	</div> 
            </div>
  )
}

