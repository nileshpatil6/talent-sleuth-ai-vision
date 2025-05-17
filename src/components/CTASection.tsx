
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 talent-gradient relative">
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Revolutionize Your Hiring Process?
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-10 text-lg">
            Join hundreds of companies using TalentSleuth AI to find the best talent faster.
            Get started today with a free trial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-opacity-90 text-talent-orange border-none text-lg py-6 px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-talent-orange text-lg py-6 px-8">
              Schedule Demo
            </Button>
          </div>
          
          <p className="mt-6 text-white text-opacity-70 text-sm">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
