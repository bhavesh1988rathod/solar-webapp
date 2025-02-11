import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[1200px] bg-gray-50 p-8 rounded-lg">
    	    <header className="mb-8">
    	        <div className="flex justify-between items-center mb-2">
    	            <h1 className="text-3xl font-bold">Consumer Dashboard</h1>
    	            <a href="/profile" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all">
    	                <span className="material-symbols-outlined">account_circle</span>
    	                <span className="text-sm">My Profile</span>
    	            </a>
    	        </div>
    	        <nav className="flex gap-4">
    	            <span className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer transition-all">Overview</span>
    	            <span className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer transition-all">Analytics</span>
    	            <span className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer transition-all">Reports</span>
    	        </nav>
    	    </header>
    	
    	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    	        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    	            <span className="material-symbols-outlined text-4xl text-blue-500">bolt</span>
    	            <h3 className="text-lg font-semibold mt-4">Total Capacity Contracted</h3>
    	            <p className="text-2xl font-bold mt-2">250 kWh</p>
    	            <p className="text-sm text-gray-500 mt-1">Maximum allowed capacity</p>
    	        </div>
    	
    	        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    	            <span className="material-symbols-outlined text-4xl text-green-500">history</span>
    	            <h3 className="text-lg font-semibold mt-4">Energy Consumed Last Month</h3>
    	            <p className="text-2xl font-bold mt-2">180 kWh</p>
    	            <p className="text-sm text-gray-500 mt-1">-5% from previous month</p>
    	        </div>
    	
    	        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    	            <span className="material-symbols-outlined text-4xl text-purple-500">electric_meter</span>
    	            <h3 className="text-lg font-semibold mt-4">Energy Consumed This Month</h3>
    	            <p className="text-2xl font-bold mt-2">145 kWh</p>
    	            <p className="text-sm text-gray-500 mt-1">Projected: 190 kWh</p>
    	        </div>
    	
    	        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    	            <span className="material-symbols-outlined text-4xl text-red-500">receipt_long</span>
    	            <h3 className="text-lg font-semibold mt-4">Last Month Invoice</h3>
    	            <p className="text-2xl font-bold mt-2">$245.00</p>
    	            <p className="text-sm text-gray-500 mt-1">Due in 15 days</p>
    	        </div>
    	
    	        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    	            <span className="material-symbols-outlined text-4xl text-orange-500">payments</span>
    	            <h3 className="text-lg font-semibold mt-4">This Month Invoice</h3>
    	            <p className="text-2xl font-bold mt-2">$198.50</p>
    	            <p className="text-sm text-gray-500 mt-1">Estimated amount</p>
    	        </div>
    	
    	        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    	            <span className="material-symbols-outlined text-4xl text-emerald-500">savings</span>
    	            <h3 className="text-lg font-semibold mt-4">Money Saved to Date</h3>
    	            <p className="text-2xl font-bold mt-2">$1,245.00</p>
    	            <p className="text-sm text-gray-500 mt-1">Through energy optimization</p>
    	        </div>
    	
    	        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all col-span-2">
    	            <span className="material-symbols-outlined text-4xl text-teal-500">eco</span>
    	            <h3 className="text-lg font-semibold mt-4">Carbon Emission Saved</h3>
    	            <p className="text-2xl font-bold mt-2">2.5 Tons CO₂</p>
    	            <p className="text-sm text-gray-500 mt-1">Equivalent to planting 40 trees</p>
    	            <div className="h-[100px] mt-4 bg-gray-50 rounded-lg"></div>
    	        </div>
    	    </div>
    	</div> 
            </div>
  )
}

