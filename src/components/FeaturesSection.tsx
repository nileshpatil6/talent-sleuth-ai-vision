
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Database, Search, FileText, Users, TrendingUp, Shield } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col card-3d bg-white border border-orange-100">
        <div className="mb-4 p-3 bg-orange-100 rounded-lg w-fit">
          <Icon className="h-6 w-6 text-talent-orange" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </motion.div>
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
    <section id="features" className="py-20 bg-white relative">
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Powerful <span className="text-talent-orange">Features</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            TalentSleuth AI brings you cutting-edge tools to revolutionize your recruitment process,
            making it faster, smarter and more accurate.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
