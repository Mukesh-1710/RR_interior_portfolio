import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { servicesData, featuresData, projectsData } from '../data/mockData';
import { fadeUpVariant, staggerContainer, staggerItemFadeUp, zoomFadeVariant } from '../utils/motion';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  // Apple-like parallax effect for hero background
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); 

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[90vh] flex items-center bg-gray-900 overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxurious Interior"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 md:pt-32">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Transform Your Space with <span className="text-accent">RR Interiors</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
              Expert Carpentry & Interior Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/projects" variant="primary" className="text-lg px-8 py-4 bg-accent text-secondary hover:bg-accent-light">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">We provide end-to-end interior solutions tailored to your specific needs and lifestyle.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData.slice(0, 3).map((service) => (
              <motion.div key={service.id} variants={staggerItemFadeUp}>
                <Card
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors">
              Explore All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">Experience the RR Interiors difference with our commitment to quality and transparency.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuresData.map((feature) => (
              <motion.div 
                key={feature.id} 
                variants={staggerItemFadeUp}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-gray-600 text-lg">Take a look at some of our recent transformations across Madurai.</p>
            </motion.div>
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to="/projects" className="hidden md:inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors mb-2">
                View All <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.slice(0, 3).map((project, index) => (
              <motion.div 
                key={project.id} 
                variants={zoomFadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15 }} // Manual sequence
                className="group relative rounded-2xl overflow-hidden aspect-[9/16] shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-accent-light text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link to="/projects" className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors">
              View All <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent text-white relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
        ></motion.div>
        
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-accent-light mb-10">Get a free design consultation and comprehensive quotation today.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-accent hover:bg-gray-50 text-lg px-8 py-4 rounded-full font-bold shadow-lg w-full sm:w-auto transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              Get Free Design + Quotation
            </Link>
            <a href="tel:+918610277404" className="flex items-center justify-center text-white border-2 border-white/30 hover:bg-white/10 transition-colors px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto">
              <PhoneCall className="mr-3" size={24} /> Call Us Now
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
