
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden">
      {/* Text content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col h-screen">
        <div className="h-24"></div> {/* Space for navbar */}
        
        <div className="flex flex-col md:flex-row items-center justify-between h-full py-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-left mb-10 md:mb-0 bg-white bg-opacity-75 p-6 rounded-lg shadow-lg"
          >
            <div className="inline-block px-4 py-1 bg-orange-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-talent-orange">SKILLS MATTER</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800 leading-tight">
              TALENT <br /> 
              <span className="text-talent-orange">SLEUTH-AI</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-gray-600">
              THE AUTONOMOUS CANDIDATE INTELLIGENCE ENGINE
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-md">
              Revolutionize your hiring process with AI-driven candidate analysis. 
              Get comprehensive insights across multiple platforms in seconds, 
              not days.
            </p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button className="bg-talent-orange hover:bg-opacity-90 text-white text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="border-talent-orange text-talent-orange hover:bg-talent-orange hover:text-white text-lg py-6 px-8">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-white text-sm mb-2 bg-talent-orange px-3 py-1 rounded-full">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroSection;
