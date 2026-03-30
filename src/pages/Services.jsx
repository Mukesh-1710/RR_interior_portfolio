import { motion } from 'framer-motion';
import Card from '../components/Card';
import { servicesData } from '../data/mockData';
import { fadeUpVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="pt-32 pb-20 bg-white border-b relative overflow-hidden">
        <motion.div 
          variants={fadeUpVariant} 
          initial="hidden" 
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert interior solutions designed to elevate every corner of your home.</p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={staggerItemFadeUp}>
              <Card 
                title={service.title}
                description={service.description}
                image={service.image}
                ctaText="Get Custom Quote"
                onCtaClick={() => window.location.href='/contact'}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
