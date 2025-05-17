
import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Head of Talent Acquisition",
      company: "TechGlobal Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      quote: "TalentSleuth AI has revolutionized our hiring process. We've reduced our time-to-hire by 65% while improving the quality of candidates we interview."
    },
    {
      name: "Michael Chen",
      role: "HR Director",
      company: "Innovative Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      quote: "The AI's ability to verify candidate information across platforms has been invaluable. We've caught several instances of resume inflation that would have gone unnoticed."
    },
    {
      name: "Priya Patel",
      role: "Recruitment Manager",
      company: "FinTech Partners",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      quote: "What impressed me most was how quickly TalentSleuth AI adapted to our company's specific hiring needs. The customized role matching has saved us countless hours."
    },
    {
      name: "Thomas Wilson",
      role: "CEO",
      company: "StartUp Innovate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      quote: "For a growing startup like ours, every hire is critical. TalentSleuth AI helps us compete with larger companies by making our recruitment process more efficient and data-driven."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Auto rotate testimonials
    intervalRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-talent-darkgray relative">
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Success <span className="text-talent-orange">Stories</span>
          </h2>
          <p className="text-talent-gray max-w-2xl mx-auto">
            See what HR professionals and talent acquisition experts say about 
            TalentSleuth AI's impact on their recruiting processes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="talent-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 bg-talent-orange opacity-20 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 -ml-8 -mb-8 bg-talent-orange opacity-20 rounded-full"></div>
            
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-talent-orange">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{testimonials[activeIndex].name}</h3>
              <p className="text-talent-orange">{testimonials[activeIndex].role}</p>
              <p className="text-talent-gray text-sm">{testimonials[activeIndex].company}</p>
            </div>
            
            <blockquote>
              <p className="text-talent-gray text-xl italic mb-6 text-center">
                "{testimonials[activeIndex].quote}"
              </p>
            </blockquote>
            
            <div className="flex justify-center items-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-talent-orange' : 'bg-talent-gray bg-opacity-30'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-talent-darkgray bg-opacity-50 hover:bg-talent-orange transition-all duration-300 flex items-center justify-center text-white"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            </div>
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-talent-darkgray bg-opacity-50 hover:bg-talent-orange transition-all duration-300 flex items-center justify-center text-white"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
