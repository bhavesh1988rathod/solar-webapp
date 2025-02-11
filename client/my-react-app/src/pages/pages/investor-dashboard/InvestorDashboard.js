import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[1200px] bg-gray-50 p-8 rounded-lg">
    	  <h1 className="text-3xl font-bold mb-8 text-center">Investor Dashboard</h1>
    	  <div className="grid grid-cols-5 gap-6 mb-8">
    	    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    	      <span className="material-symbols-outlined text-3xl mb-2">account_balance_wallet</span>
    	      <h3 className="text-sm font-medium">Total Invested</h3>
    	      <p className="text-2xl font-bold">$245,000</p>
    	    </div>
    	    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    	      <span className="material-symbols-outlined text-3xl mb-2">trending_up</span>
    	      <h3 className="text-sm font-medium">Overall Return</h3>
    	      <p className="text-2xl font-bold">$32,450</p>
    	    </div>
    	    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    	      <span className="material-symbols-outlined text-3xl mb-2">percent</span>
    	      <h3 className="text-sm font-medium">IRR</h3>
    	      <p className="text-2xl font-bold">15.2%</p>
    	    </div>
    	    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    	      <span className="material-symbols-outlined text-3xl mb-2">monitoring</span>
    	      <h3 className="text-sm font-medium">CAGR</h3>
    	      <p className="text-2xl font-bold">12.8%</p>
    	    </div>
    	    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    	      <span className="material-symbols-outlined text-3xl mb-2">bolt</span>
    	      <h3 className="text-sm font-medium">Invested Projects</h3>
    	      <p className="text-2xl font-bold">450 kW</p>
    	    </div>
    	  </div>
    	
    	  <div className="bg-white rounded-lg shadow-md p-6">
    	    <div className="flex justify-between items-center mb-6">
    	      <h2 className="text-xl font-bold">Investment Opportunities</h2>
    	      <details className="relative">
    	        <summary className="list-none cursor-pointer bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
    	          <span className="flex items-center gap-2">
    	            <span className="material-symbols-outlined">filter_list</span>
    	            Filters
    	          </span>
    	        </summary>
    	        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
    	          <div className="space-y-4">
    	            <div>
    	              <label className="block text-sm font-medium mb-1">Location</label>
    	              <select className="w-full rounded-md border-gray-300 bg-gray-50 p-2">
    	                <option>All Locations</option>
    	                <option>California</option>
    	                <option>Texas</option>
    	                <option>Florida</option>
    	              </select>
    	            </div>
    	            <div>
    	              <label className="block text-sm font-medium mb-1">Project Size</label>
    	              <select className="w-full rounded-md border-gray-300 bg-gray-50 p-2">
    	                <option>All Sizes</option>
    	                <option>Small (&lt;100 kW)</option>
    	                <option>Medium (100-500 kW)</option>
    	                <option>Large (&gt;500 kW)</option>
    	              </select>
    	            </div>
    	          </div>
    	        </div>
    	      </details>
    	    </div>
    	
    	    <div className="overflow-x-auto">
    	      <table className="w-full">
    	        <thead>
    	          <tr className="border-b">
    	            <th className="text-left py-3 px-4">Project Name</th>
    	            <th className="text-left py-3 px-4">Location</th>
    	            <th className="text-left py-3 px-4">Size (kW)</th>
    	            <th className="text-left py-3 px-4">Cost ($)</th>
    	            <th className="text-left py-3 px-4">Expected IRR</th>
    	            <th className="text-left py-3 px-4">Status</th>
    	            <th className="text-left py-3 px-4">Closing Date</th>
    	          </tr>
    	        </thead>
    	        <tbody>
    	          <tr className="border-b hover:bg-gray-50 transition-colors">
    	            <td className="py-3 px-4">Solar Farm Alpha</td>
    	            <td className="py-3 px-4">California</td>
    	            <td className="py-3 px-4">250</td>
    	            <td className="py-3 px-4">320,000</td>
    	            <td className="py-3 px-4">14.5%</td>
    	            <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Active</span></td>
    	            <td className="py-3 px-4">2024-03-15</td>
    	          </tr>
    	          <tr className="border-b hover:bg-gray-50 transition-colors">
    	            <td className="py-3 px-4">Wind Project Beta</td>
    	            <td className="py-3 px-4">Texas</td>
    	            <td className="py-3 px-4">500</td>
    	            <td className="py-3 px-4">650,000</td>
    	            <td className="py-3 px-4">16.2%</td>
    	            <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Pending</span></td>
    	            <td className="py-3 px-4">2024-04-01</td>
    	          </tr>
    	          <tr className="hover:bg-gray-50 transition-colors">
    	            <td className="py-3 px-4">Solar Project Gamma</td>
    	            <td className="py-3 px-4">Florida</td>
    	            <td className="py-3 px-4">180</td>
    	            <td className="py-3 px-4">240,000</td>
    	            <td className="py-3 px-4">13.8%</td>
    	            <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">New</span></td>
    	            <td className="py-3 px-4">2024-03-30</td>
    	          </tr>
    	        </tbody>
    	      </table>
    	    </div>
    	  </div>
    	</div> 
            </div>
  )
}

