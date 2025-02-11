import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[1200px] bg-gray-100 rounded-xl p-8">
    	    <nav className="bg-white rounded-lg p-4 mb-8 shadow-md">
    	        <ul className="flex space-x-6">
    	            <li>
    	                <details className="relative">
    	                    <summary className="flex items-center cursor-pointer hover:text-blue-600 transition-colors">
    	                        <span className="material-symbols-outlined mr-2">solar_power</span>
    	                        Solar Projects
    	                        <span className="material-symbols-outlined ml-1">expand_more</span>
    	                    </summary>
    	                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 w-48 z-10">
    	                        <a href="#" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">
    	                            <span className="material-symbols-outlined mr-2">add_circle</span>
    	                            Add Project
    	                        </a>
    	                        <a href="#" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">
    	                            <span className="material-symbols-outlined mr-2">edit</span>
    	                            Edit Project
    	                        </a>
    	                        <a href="#" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">
    	                            <span className="material-symbols-outlined mr-2">delete</span>
    	                            Delete Project
    	                        </a>
    	                    </div>
    	                </details>
    	            </li>
    	            <li>
    	                <a href="#" className="flex items-center hover:text-blue-600 transition-colors">
    	                    <span className="material-symbols-outlined mr-2">group</span>
    	                    View All Users
    	                </a>
    	            </li>
    	            <li>
    	                <a href="#" className="flex items-center hover:text-blue-600 transition-colors">
    	                    <span className="material-symbols-outlined mr-2">handshake</span>
    	                    Manage Matches
    	                </a>
    	            </li>
    	        </ul>
    	    </nav>
    	
    	    <header className="bg-white rounded-lg p-6 mb-8 shadow-md">
    	        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
    	        <p className="text-gray-600">Here's your dashboard overview</p>
    	    </header>
    	
    	    <div className="grid grid-cols-3 gap-8">
    	        <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform">
    	            <div className="flex items-center justify-between mb-4">
    	                <span className="material-symbols-outlined text-4xl text-green-500">solar_power</span>
    	                <span className="text-3xl font-bold">156</span>
    	            </div>
    	            <h2 className="text-xl font-semibold">Active Projects</h2>
    	            <p className="text-gray-600 mt-2">Total solar projects in progress</p>
    	        </div>
    	
    	        <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform">
    	            <div className="flex items-center justify-between mb-4">
    	                <span className="material-symbols-outlined text-4xl text-blue-500">business_center</span>
    	                <span className="text-3xl font-bold">847</span>
    	            </div>
    	            <h2 className="text-xl font-semibold">Registered Investors</h2>
    	            <p className="text-gray-600 mt-2">Active investment partners</p>
    	        </div>
    	
    	        <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform">
    	            <div className="flex items-center justify-between mb-4">
    	                <span className="material-symbols-outlined text-4xl text-purple-500">person</span>
    	                <span className="text-3xl font-bold">2,391</span>
    	            </div>
    	            <h2 className="text-xl font-semibold">Registered Consumers</h2>
    	            <p className="text-gray-600 mt-2">Total energy consumers</p>
    	        </div>
    	    </div>
    	</div> 
            </div>
  )
}

