import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Heart,ShoppingBag, ChevronDown, X,  } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';





const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className=" border-b border-gray-200 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold logofont">SuPra</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
           <Link to="/"> Home</Link>
           <Link to="/"> About</Link>
           <Link to="/"> Contact</Link>

          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-black" onClick={() =>{ 
               navigate('/account')
              }}>
              <User size={20} />
            </button>
            {/* <button className="text-gray-600 hover:text-black relative">
              <Heart size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button> */}
            <button className="text-gray-600 hover:text-black relative" onClick={() =>{ 
               navigate('/cart')
              // setIsCartOpen(true)
              }}>
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;