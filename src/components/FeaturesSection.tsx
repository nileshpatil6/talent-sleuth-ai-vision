
import { Card } from '@/components/ui/card';
import { Database, Search, FileText, Users, TrendingUp, Shield } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="talent-card p-6 hover:talent-glow transition-all duration-300 h-full flex flex-col">
      <div className="mb-4 p-3 bg-talent-orange bg-opacity-10 rounded-lg w-fit">
        <Icon className="h-6 w-6 text-talent-orange" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-talent-gray">{description}</p>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart Resume Parsing",
      description: "Extract key details from resumes in any format (DOCX, PDF, text) with advanced parsing techniques."
    },
    {
      icon: Search,
      title: "Multi-Platform Search",
      description: "Automatically search and analyze candidate profiles across LinkedIn, GitHub, Naukri, and more."
    },
    {
      icon: Database,
      title: "Consolidated Dossier",
      description: "Generate a comprehensive candidate profile combining data from multiple verified sources."
    },
    {
      icon: Shield,
      title: "Discrepancy Detection",
      description: "Highlight inconsistencies between resume claims and online professional profiles."
    },
    {
      icon: TrendingUp,
      title: "AI Role Matching",
      description: "Get instant AI-evaluated fit scores based on job requirements and candidate profiles."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights and collaborate on candidate evaluations with your entire HR team."
    },
  ];

  return (
    <section id="features" className="py-20 bg-talent-darkgray relative">
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Powerful <span className="text-talent-orange">Features</span>
          </h2>
          <p className="text-talent-gray max-w-2xl mx-auto">
            TalentSleuth AI brings you cutting-edge tools to revolutionize your recruitment process,
            making it faster, smarter and more accurate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
