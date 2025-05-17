
import { Clock, CheckCircle, TrendingUp, Database, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 70% of Time",
      description: "Reduce candidate evaluation time from days to minutes with autonomous AI analysis."
    },
    {
      icon: CheckCircle,
      title: "Improve Hire Quality",
      description: "Make better decisions with comprehensive verified candidate profiles and skill validation."
    },
    {
      icon: TrendingUp,
      title: "Reduce Hiring Costs",
      description: "Cut recruitment costs by streamlining the screening process and reducing bad hires."
    },
    {
      icon: Database,
      title: "Data-Driven Decisions",
      description: "Make objective hiring choices based on verified data across multiple platforms."
    },
    {
      icon: Shield,
      title: "Avoid Resume Fraud",
      description: "Identify discrepancies between claimed and actual experience automatically."
    },
  ];

  return (
    <section id="benefits" className="py-20 talent-gradient relative">
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose <span className="text-black">TalentSleuth AI</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto opacity-90">
            Our platform delivers tangible business benefits by transforming how you discover, 
            evaluate and select the best talent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-6 p-3 bg-white bg-opacity-20 rounded-lg w-fit">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-white opacity-80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
