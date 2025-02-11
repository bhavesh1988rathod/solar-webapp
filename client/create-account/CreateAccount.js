import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[480px] bg-white rounded-xl shadow-lg p-8">
    	  <form className="space-y-6">
    	    <h2 className="text-2xl font-bold mb-8">Create Account</h2>
    	    
    	    <div className="space-y-2">
    	      <label className="block font-medium">Email</label>
    	      <input 
    	        type="email"
    	        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
    	        placeholder="Enter your email"
    	        required />
    	    </div>
    	
    	    <div className="space-y-2">
    	      <label className="block font-medium">Password</label>
    	      <input 
    	        type="password"
    	        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
    	        placeholder="Create password"
    	        required />
    	    </div>
    	
    	    <div className="space-y-2">
    	      <label className="block font-medium">Confirm Password</label>
    	      <input 
    	        type="password"
    	        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
    	        placeholder="Confirm password"
    	        required />
    	    </div>
    	
    	    <div className="space-y-2">
    	      <label className="block font-medium">User Role</label>
    	      <details className="relative">
    	        <summary className="w-full px-4 py-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50 transition duration-200 list-none">
    	          Select Role
    	        </summary>
    	        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
    	          <div className="p-2">
    	            <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
    	              <input type="radio" name="role" className="mr-2" required />
    	              Consumer
    	            </label>
    	            <label className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
    	              <input type="radio" name="role" className="mr-2" required />
    	              Investor
    	            </label>
    	          </div>
    	        </div>
    	      </details>
    	    </div>
    	
    	    <label className="flex items-center space-x-2 cursor-pointer">
    	      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition duration-200" required />
    	      <span className="text-sm">I agree to the Terms and Conditions</span>
    	    </label>
    	
    	    <button 
    	      type="submit"
    	      className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transform active:scale-[0.98] transition duration-200">
    	      Register
    	    </button>
    	
    	    <div className="hidden bg-green-100 text-green-800 p-4 rounded-lg">
    	      A verification email has been sent to your email address. Please verify your email to proceed.
    	    </div>
    	  </form>
    	</div> 
            </div>
  )
}

