import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 -mb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
        <div>
        {/* Payment Options */}
        <div className="flex justify-center mb-4 items-center space-x-4">
          <motion.img
            src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-943.png" // Use actual icon paths
            alt="Apple Pay"
            className="h-8"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-941.png"
            alt="Amex"
            className="h-8"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-942.png"
            alt="Google Pay"
            className="h-8"
            whileHover={{ scale: 1.1 }}
          />
        </div>

        {/* Copyright and Social Links */}
        <div className="flex flex-col items-center">
          <p>© SuPra zone</p>
          <p>Powered by universal commerce</p>
          <div className="flex space-x-4 mt-4">
            <motion.a href="#" whileHover={{ scale: 1.1 }}>
<FaFacebookF/>            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }}>
              <FaTwitter />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }}>
              <FaInstagram/>
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }}>
              <FaLinkedinIn/>
            </motion.a>
          </div>
        </div>
        </div>
        {/* Subscription Form */}
        <div className="flex flex-col items-center">
          <ul className="text-gray-500 mb-4 space-y-2">
            <li>Visa Cards</li>
            <li>Master Cards</li>
            <li>Other Cards</li>
          </ul>
        
        </div>
        <div className="p-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 w-full rounded-md focus:outline-none"
            />
            <br />
            <motion.button
              className="w-full my-2 py-2 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white px-4 rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              Subscribe
            </motion.button>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
