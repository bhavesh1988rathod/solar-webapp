import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[1200px] bg-white rounded-lg shadow-lg p-8">
    	    <div className="flex justify-between items-center mb-6">
    	        <h1 className="text-2xl font-semibold">List of Users</h1>
    	        <details className="relative inline-block">
    	            <summary className="list-none cursor-pointer bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
    	                Filter by Role
    	                <span className="material-symbols-outlined align-middle ml-2 text-sm">filter_list</span>
    	            </summary>
    	            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 z-10 w-48">
    	                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Investor</div>
    	                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Consumer</div>
    	            </div>
    	        </details>
    	    </div>
    	    <div className="overflow-x-auto">
    	        <table className="w-full">
    	            <thead>
    	                <tr className="border-b">
    	                    <th className="py-4 px-6 text-left hover:bg-gray-50 transition-colors duration-200">Name</th>
    	                    <th className="py-4 px-6 text-left hover:bg-gray-50 transition-colors duration-200">Email</th>
    	                    <th className="py-4 px-6 text-left hover:bg-gray-50 transition-colors duration-200">Role</th>
    	                    <th className="py-4 px-6 text-left hover:bg-gray-50 transition-colors duration-200">Actions</th>
    	                </tr>
    	            </thead>
    	            <tbody>
    	                <tr className="border-b hover:bg-gray-50 transition-all duration-200">
    	                    <td className="py-4 px-6">John Doe</td>
    	                    <td className="py-4 px-6">john.doe@example.com</td>
    	                    <td className="py-4 px-6">
    	                        <details className="relative inline-block">
    	                            <summary className="list-none cursor-pointer bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
    	                                Investor
    	                                <span className="material-symbols-outlined align-middle ml-2 text-sm">expand_more</span>
    	                            </summary>
    	                            <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 z-10">
    	                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Investor</div>
    	                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Consumer</div>
    	                            </div>
    	                        </details>
    	                    </td>
    	                    <td className="py-4 px-6">
    	                        <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
    	                            <span className="material-symbols-outlined align-middle">visibility</span>
    	                        </button>
    	                        <button className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-200">
    	                            <span className="material-symbols-outlined align-middle">edit</span>
    	                        </button>
    	                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200">
    	                            <span className="material-symbols-outlined align-middle">delete</span>
    	                        </button>
    	                    </td>
    	                </tr>
    	                <tr className="border-b hover:bg-gray-50 transition-all duration-200">
    	                    <td className="py-4 px-6">Jane Smith</td>
    	                    <td className="py-4 px-6">jane.smith@example.com</td>
    	                    <td className="py-4 px-6">
    	                        <details className="relative inline-block">
    	                            <summary className="list-none cursor-pointer bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
    	                                Consumer
    	                                <span className="material-symbols-outlined align-middle ml-2 text-sm">expand_more</span>
    	                            </summary>
    	                            <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 z-10">
    	                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Investor</div>
    	                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Consumer</div>
    	                            </div>
    	                        </details>
    	                    </td>
    	                    <td className="py-4 px-6">
    	                        <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
    	                            <span className="material-symbols-outlined align-middle">visibility</span>
    	                        </button>
    	                        <button className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-200">
    	                            <span className="material-symbols-outlined align-middle">edit</span>
    	                        </button>
    	                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200">
    	                            <span className="material-symbols-outlined align-middle">delete</span>
    	                        </button>
    	                    </td>
    	                </tr>
    	            </tbody>
    	        </table>
    	    </div>
    	</div> 
            </div>
  )
}

