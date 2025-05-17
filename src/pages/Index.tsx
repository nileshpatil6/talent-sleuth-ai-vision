
import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  // Enhanced scroll reveal with intersection observer
  useEffect(() => {
    document.title = "TalentSleuth AI - Autonomous Candidate Intelligence Engine";
    
    // Initialize scroll reveal with Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once the animation has played, we can stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% of the element is visible
      rootMargin: '-50px 0px' // trigger slightly before the element is visible
    });
    
    // Observe all elements with 'reveal' class
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      // Clean up the observer on component unmount
      observer.disconnect();
    };
  }, []);
  
  // Parallax effect for background
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Full-screen Spline container */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <Spline scene="https://prod.spline.design/c4-YMv5CI7wrJSLc/scene.splinecode" />
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <motion.div 
          className="fixed inset-0 hero-pattern opacity-10 z-0" 
          style={{ 
            opacity: backgroundOpacity,
            y: backgroundY
          }}
        />
        
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
