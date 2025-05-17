
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // This would be where Spline initialization code would go
    console.log('Spline would be initialized here');
    
    // Simulating Spline with a canvas animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    const particles: {x: number, y: number, radius: number, speedX: number, speedY: number}[] = [];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
      });
    }
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgba(255, 107, 0, 0.3)';
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      requestAnimationFrame(drawParticles);
    };
    
    drawParticles();
    
    const handleResize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-talent-darkgray">
      {/* Background overlay */}
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      
      {/* Canvas for particle animation (simulating Spline) */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      ></canvas>

      {/* Hero content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col h-screen">
        <div className="h-24"></div> {/* Space for navbar */}
        
        <div className="flex flex-col md:flex-row items-center justify-between h-full py-12">
          {/* Text content */}
          <div className="md:w-1/2 text-left mb-10 md:mb-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block px-4 py-1 bg-talent-orange bg-opacity-20 rounded-full mb-4">
              <span className="text-sm font-semibold text-talent-orange">SKILLS MATTER</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              TALENT <br /> 
              <span className="text-talent-orange">SLEUTH-AI</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-talent-gray">
              THE AUTONOMOUS CANDIDATE INTELLIGENCE ENGINE
            </h2>
            
            <p className="text-talent-gray mb-8 max-w-md">
              Revolutionize your hiring process with AI-driven candidate analysis. 
              Get comprehensive insights across multiple platforms in seconds, 
              not days.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-talent-orange hover:bg-opacity-90 text-white text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="border-talent-orange text-talent-orange hover:bg-talent-orange hover:text-white text-lg py-6 px-8">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* 3D head visualization - placeholder for Spline object */}
          <div className="md:w-1/2 flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative w-full h-[400px] md:h-[500px]">
              {/* This would be replaced with actual Spline component */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-talent-orange bg-opacity-20 animate-pulse">
                  <img 
                    src="/lovable-uploads/29b70b94-7306-485a-b70a-48f805d93af3.png" 
                    alt="AI Head Visualization" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-talent-orange rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-talent-orange rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-talent-orange rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-talent-orange text-sm mb-2">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
