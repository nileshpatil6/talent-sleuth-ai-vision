
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <motion.span 
            className="text-2xl font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            Talent<span className="text-talent-orange">Sleuth</span>
            <span className="text-talent-orange">AI</span>
          </motion.span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.a 
            href="#features" 
            className="text-gray-800 hover:text-talent-orange transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Features
          </motion.a>
          <motion.a 
            href="#how-it-works" 
            className="text-gray-800 hover:text-talent-orange transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            How It Works
          </motion.a>
          <motion.a 
            href="#benefits" 
            className="text-gray-800 hover:text-talent-orange transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Benefits
          </motion.a>
          <motion.a 
            href="#testimonials" 
            className="text-gray-800 hover:text-talent-orange transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Testimonials
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-talent-orange hover:bg-opacity-90 text-white border-none">
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden bg-white bg-opacity-95 backdrop-blur-md ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-gray-800 hover:text-talent-orange transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-800 hover:text-talent-orange transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-gray-800 hover:text-talent-orange transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-800 hover:text-talent-orange transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button className="bg-talent-orange hover:bg-opacity-90 text-white border-none w-full">
            Get Started
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
