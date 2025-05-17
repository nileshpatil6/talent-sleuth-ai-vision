
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 hero-pattern opacity-20"
        animate={{ 
          backgroundPositionX: ["0%", "100%"],
          backgroundPositionY: ["0%", "100%"]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 text-center shadow-lg border border-orange-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to Revolutionize Your Hiring Process?
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Join hundreds of companies using TalentSleuth AI to find the best talent faster.
            Get started today with a free trial.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-talent-orange hover:bg-opacity-90 text-white border-none text-lg py-6 px-8 shadow-md">
                Start Free Trial
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-talent-orange text-talent-orange hover:bg-talent-orange hover:text-white text-lg py-6 px-8">
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            No credit card required. 14-day free trial.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
