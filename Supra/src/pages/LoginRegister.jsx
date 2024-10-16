import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(isLogin ? 'Login' : 'Signup', { email, password, firstName, lastName });
    
    // Show alert
    setAlert({
      show: true,
      message: isLogin ? 'Login successful!' : 'Account created successfully!',
      type: 'success'
    });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert.show]);

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
        <div className="flex flex-col md:flex-row">
          <motion.div
            layout
            className="w-full p-8 md:w-1/2"
          >
            <AnimatePresence mode="wait">
              {!isLogin ? (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h2 className="mb-2 text-2xl font-bold text-gray-800">Create account</h2>
                  <p className="mb-6 text-sm text-gray-600">Don't have account? Register from here.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      className="w-full rounded-md border border-gray-300 p-2"
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      className="w-full rounded-md border border-gray-300 p-2"
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                      className="w-full rounded-md border border-gray-300 p-2"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="w-full rounded-md border border-gray-300 p-2"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="w-full rounded-md bg-black p-2 text-white transition-colors hover:bg-gray-800"
                      type="submit"
                    >
                      Create
                    </button>
                  </form>
                  <div className="mt-6 border-t border-gray-200 pt-6 text-center">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">Login</h3>
                    <p className="text-sm text-gray-600">Have you already account? Login here.</p>
                    <button
                      className="mt-2 text-sm text-blue-600 hover:underline"
                      onClick={toggleForm}
                    >
                      Sign in
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h2 className="mb-6 text-2xl font-bold text-gray-800">Login</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      className="w-full rounded-md border border-gray-300 p-2"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="w-full rounded-md border border-gray-300 p-2"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="text-right">
                      <a href="#" className="text-sm text-blue-600 hover:underline">Forgot your password?</a>
                    </div>
                    <button
                      className="w-full rounded-md bg-black p-2 text-white transition-colors hover:bg-gray-800"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </form>
                  <div className="mt-6 border-t border-gray-200 pt-6 text-center">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">Create account</h3>
                    <p className="text-sm text-gray-600">Don't have account? Register from here.</p>
                    <button
                      className="mt-2 text-sm text-blue-600 hover:underline"
                      onClick={toggleForm}
                    >
                      Create account
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <div className="hidden w-1/2 md:block">
            <img
              src={isLogin ? "https://the-monk-theme.myshopify.com/cdn/shop/files/pexels-ds-stories-7256152.jpg?v=1698690458&width=1920" : "https://the-monk-theme.myshopify.com/cdn/shop/files/pexels-osmany-mederos-17994860.jpg?v=1698519658&width=1920"}
              alt="Decorative"
              className="h-full w-full object-fit"
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {alert.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50, x: 50 }}
            className={`fixed top-4 right-4 z-50 rounded-md p-4 shadow-md ${
              alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {alert.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginSignup;