import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[1200px] bg-white rounded-lg shadow-lg p-8">
    	    <div className="grid grid-cols-2 gap-8">
    	        <div className="space-y-6">
    	            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
    	            <form className="space-y-4">
    	                <div>
    	                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition duration-200 outline-none" />
    	                </div>
    	                <div>
    	                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition duration-200 outline-none" />
    	                </div>
    	                <div>
    	                    <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition duration-200 outline-none" />
    	                </div>
    	                <div>
    	                    <textarea placeholder="Your Message" rows="6" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition duration-200 outline-none resize-none"></textarea>
    	                </div>
    	                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]">
    	                    Submit Message
    	                </button>
    	            </form>
    	        </div>
    	        <div className="space-y-8">
    	            <div className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition duration-200">
    	                <div className="flex items-center space-x-4">
    	                    <span className="material-symbols-outlined text-3xl text-primary-600">location_on</span>
    	                    <div>
    	                        <h3 className="font-semibold text-lg mb-1">Our Address</h3>
    	                        <p className="text-neutral-600">123 Business Street, Suite 100, New York, NY 10001</p>
    	                    </div>
    	                </div>
    	            </div>
    	            <div className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition duration-200">
    	                <div className="flex items-center space-x-4">
    	                    <span className="material-symbols-outlined text-3xl text-primary-600">phone</span>
    	                    <div>
    	                        <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
    	                        <p className="text-neutral-600">+1 (555) 123-4567</p>
    	                    </div>
    	                </div>
    	            </div>
    	            <div className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition duration-200">
    	                <div className="flex items-center space-x-4">
    	                    <span className="material-symbols-outlined text-3xl text-primary-600">mail</span>
    	                    <div>
    	                        <h3 className="font-semibold text-lg mb-1">Email Address</h3>
    	                        <p className="text-neutral-600">contact@company.com</p>
    	                    </div>
    	                </div>
    	            </div>
    	            <div className="flex space-x-4 mt-8">
    	                <a href="#" className="bg-neutral-100 p-3 rounded-full hover:bg-neutral-200 transition duration-200">
    	                    <i className="fa-brands fa-facebook text-2xl"></i>
    	                </a>
    	                <a href="#" className="bg-neutral-100 p-3 rounded-full hover:bg-neutral-200 transition duration-200">
    	                    <i className="fa-brands fa-twitter text-2xl"></i>
    	                </a>
    	                <a href="#" className="bg-neutral-100 p-3 rounded-full hover:bg-neutral-200 transition duration-200">
    	                    <i className="fa-brands fa-linkedin text-2xl"></i>
    	                </a>
    	                <a href="#" className="bg-neutral-100 p-3 rounded-full hover:bg-neutral-200 transition duration-200">
    	                    <i className="fa-brands fa-instagram text-2xl"></i>
    	                </a>
    	            </div>
    	        </div>
    	    </div>
    	</div> 
            </div>
  )
}

