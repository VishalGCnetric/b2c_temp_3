import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ChevronDown, ChevronUp } from 'lucide-react';
import ProductSlider from '../components/HomeComponent/ProductSlider';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [showModal, setShowModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const images = [
    'https://gadgets21.zohocommerce.com/product-images/Product+Image-3.webp/5268485000000097545/400x400',
    'https://gadgets21.zohocommerce.com/product-images/Product+Image-5.webp/5268485000000097571/600x600',
    'https://gadgets21.zohocommerce.com/product-images/Product+Image-4.webp/5268485000000097553/600x600',
  ];

  const colors = ['black', 'white', 'gray'];
  const sizes = ['S', 'M', 'L', 'XL'];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleViewCart = () => {
    console.log('Redirecting to cart page...');
  };

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full h-[80vh] md:w-1/2">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Product image ${currentImageIndex + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight size={24} />
          </button>
                    {/* Thumbnail Preview Gallery */}
                    <div className="mt-4 flex gap-2">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer rounded-lg ${
                  currentImageIndex === index ? 'border-2 border-black' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>

        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 heading">Product Name</h1>
          <p className="text-gray-600 mb-4">Product description goes here. This is a great product with amazing features.Product description goes here. This is a great product with amazing features.</p>
          <p className="text-green-600 mb-4 text-semibold ">INR 4999</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Color</h2>
            <div className="flex gap-2">
              {colors.map((color) => (
                <motion.button
                  key={color}
                  className={`w-8 h-8 rounded-full ${color === 'white' ? 'border border-gray-300' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Size</h2>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <motion.button
                  key={size}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' : 'bg-white text-black'
                  }`}
                  onClick={() => setSelectedSize(size)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>
          <motion.button
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </motion.button>

          {/* Accordion for additional product information */}
          <div className="mt-6">
            <div className="border-t pt-4">
              <button
                className="w-full flex justify-between items-center py-2 text-left text-lg font-semibold"
                onClick={() => toggleSection('features')}
              >
                Product Features
                {expandedSections.features ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {expandedSections.features && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="pl-4 text-gray-600">
                      <li>- High-quality materials</li>
                      <li>- Long-lasting performance</li>
                      <li>- Sleek and modern design</li>
                      <li>- Comfortable to use</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t pt-4">
              <button
                className="w-full flex justify-between items-center py-2 text-left text-lg font-semibold"
                onClick={() => toggleSection('specifications')}
              >
                Specifications
                {expandedSections.specifications ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {expandedSections.specifications && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="pl-4 text-gray-600">
                      <li>- Dimensions: 10 x 5 x 2 inches</li>
                      <li>- Weight: 1.5 lbs</li>
                      <li>- Battery Life: 10 hours</li>
                      <li>- Material: Carbon Fiber</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t pt-4">
              <button
                className="w-full flex justify-between items-center py-2 text-left text-lg font-semibold"
                onClick={() => toggleSection('reviews')}
              >
                Customer Reviews
                {expandedSections.reviews ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {expandedSections.reviews && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pl-4 text-gray-600">
                      <p>⭐️⭐️⭐️⭐️⭐️ - Excellent product, highly recommend!</p>
                      <p>⭐️⭐️⭐️⭐️ - Great value for the price.</p>
                      <p>⭐️⭐️⭐️⭐️⭐️ - Super fast shipping and amazing quality!</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t pt-4">
              <button
                className="w-full flex justify-between items-center py-2 text-left text-lg font-semibold"
                onClick={() => toggleSection('shipping')}
              >
                Shipping Information
                {expandedSections.shipping ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {expandedSections.shipping && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="pl-4 text-gray-600">
                      <li>- Standard Shipping: 3-5 business days</li>
                      <li>- Express Shipping: 1-2 business days</li>
                      <li>- Free returns within 30 days</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Add to Cart Confirmation */}
 {/* Modal for Add to Cart Confirmation */}
 <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-gray-100 bg-opacity-0 flex items-center justify-center z-50"
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg relative w-96"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button className="absolute top-2 right-2" onClick={() => setShowModal(false)}>
                <X size={24} />
              </button>
              <h2 className="text-2xl font-semibold mb-4">Product added to cart!</h2>
              {/* Show the product image and name */}
              <div className="flex gap-4 items-center">
                <img
                  src={images[currentImageIndex]}
                  alt="Product in cart"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-medium">Product Name</h3>
                  <p className="text-gray-500">Color: {selectedColor}, Size: {selectedSize}</p>
                </div>
              </div>
<Link to="/cart">
              <motion.button
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewCart}
              >
                View Cart
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-20">
      <ProductSlider heading="Similar Product"/>
      </div>
    </div>
  );
};

export default ProductDetailPage;
