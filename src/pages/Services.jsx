import { motion } from 'framer-motion';
import Card from '../components/Card';
import { servicesData } from '../data/mockData';
import { fadeUpVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-main min-h-screen pb-24">
      {/* Header */}
      <div className="pt-40 pb-24 bg-bg-secondary relative overflow-hidden">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 lg:px-12 text-center"
        >
          <motion.span variants={fadeUpVariant} className="text-accent text-xs uppercase tracking-[0.3em] font-medium mb-6 block">Our Expertise</motion.span>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Bespoke <span className="italic font-normal">Solutions</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">End-to-end architectural interior services designed to elevate your living experience.</p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={staggerItemFadeUp}>
              <Card
                title={service.title}
                description={service.description}
                image={service.image}
                ctaText="View Details"
                onCtaClick={() => navigate(service.path || "/Contact")}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

