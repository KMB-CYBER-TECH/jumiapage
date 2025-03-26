import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-20 text-sm -mt-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-3">NEED HELP?</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Chat with us</a></li>
              <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
            <h3 className="font-semibold text-lg mt-5 mb-3">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Service Center</a></li>
              <li><a href="#" className="hover:text-gray-400">How to shop on Jumia?</a></li>
              <li><a href="#" className="hover:text-gray-400">Delivery options and timelines</a></li>
              <li><a href="#" className="hover:text-gray-400">How to return a product on Jumia?</a></li>
              <li><a href="#" className="hover:text-gray-400">Corporate and bulk purchases</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">ABOUT JUMIA</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About us</a></li>
              <li><a href="#" className="hover:text-gray-400">Jumia Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Jumia Express</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Notice</a></li>
              <li><a href="#" className="hover:text-gray-400">Jumia Store Credit Terms</a></li>
              <li><a href="#" className="hover:text-gray-400">Cookie Notice</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">MAKE MONEY WITH JUMIA</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Sell on Jumia</a></li>
              <li><a href="#" className="hover:text-gray-400">Vendor Hub</a></li>
              <li><a href="#" className="hover:text-gray-400">Become a Sales Consultant</a></li>
              <li><a href="#" className="hover:text-gray-400">Our Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">JUMIA INTERNATIONAL</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><a href="#" className="hover:text-gray-400">Algeria</a></li>
              <li><a href="#" className="hover:text-gray-400">Kenya</a></li>
              <li><a href="#" className="hover:text-gray-400">Egypt</a></li>
              <li><a href="#" className="hover:text-gray-400">Morocco</a></li>
              <li><a href="#" className="hover:text-gray-400">Ghana</a></li>
              <li><a href="#" className="hover:text-gray-400">Senegal</a></li>
              <li><a href="#" className="hover:text-gray-400">Ivory Coast</a></li>
              <li><a href="#" className="hover:text-gray-400">Uganda</a></li>
            </ul>
          </div>
          
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center">


        <div className="mt-8 border-t border-gray-500 pt-1 flex flex-col md:flex-row justify-between items-center">
          
        <div className="text-center  mt-6 md:mt-0">
            <h3 className="font-semibold text-lg mb-3">JOIN US ON</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTiktok /></a>
            </div>
          </div>


</div>

          <p className="text-gray-400 font-semibold mb-2 -mt-15 -ml-75">PAYMENT METHODS & DELIVERY PARTNERS</p>
          <div className="flex justify-center space-x-4 text-gray-400 -ml-55">
            <span>💳 VISA</span>
            <span>💳 Verve</span>
            <span>💳 Interswitch</span>
            <span>📦 DHL</span>
            <span>📦 MAX</span>
          </div>
          <p className="mt-4 text-white">★ PAY</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
