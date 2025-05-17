
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Upload Resume",
      description: "Upload or receive a candidate's resume in any standard format (DOCX, PDF, or text).",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: 2,
      title: "AI Analysis",
      description: "Our AI extracts key details and searches across major professional platforms like LinkedIn, GitHub, and more.",
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: 3,
      title: "Generate Insights",
      description: "Get a consolidated candidate dossier with verified history, skills, and online presence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: 4,
      title: "Make Better Decisions",
      description: "View role-fitment scores, highlight red flags, and make data-driven hiring decisions.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#1A1F2C] relative">
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How <span className="text-talent-orange">It Works</span>
          </h2>
          <p className="text-talent-gray max-w-2xl mx-auto">
            TalentSleuth AI simplifies talent acquisition with an intuitive workflow.
            Here's how our autonomous candidate intelligence engine works.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Step Navigation */}
          <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
            <div className="flex flex-col gap-4">
              {steps.map((step) => (
                <Card 
                  key={step.number}
                  className={`talent-card p-6 cursor-pointer transition-all duration-300 ${
                    activeStep === step.number 
                      ? 'border-talent-orange talent-glow' 
                      : 'border-transparent hover:border-talent-orange'
                  }`}
                  onClick={() => setActiveStep(step.number)}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        activeStep === step.number 
                          ? 'bg-talent-orange' 
                          : 'bg-talent-orange bg-opacity-20'
                      }`}
                    >
                      <span className={`font-bold ${
                        activeStep === step.number 
                          ? 'text-white' 
                          : 'text-talent-orange'
                      }`}>{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-talent-gray">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Step Illustration */}
          <div className="lg:w-2/3 w-full rounded-xl overflow-hidden relative h-[400px] md:h-[500px]">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeStep === step.number ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Step {step.number}: {step.title}</h3>
                  <p className="text-talent-gray max-w-md mb-6">{step.description}</p>
                  <Button className="bg-talent-orange hover:bg-opacity-90 text-white">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
