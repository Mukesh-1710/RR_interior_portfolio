import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import { servicesData, featuresData, projectsData } from '../data/mockData';
import { fadeUpVariant, staggerContainer, staggerItemFadeUp, zoomFadeVariant } from '../utils/motion';
import home from '../assets/home.png';
import LocationSection from '../components/LocationSection';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-bg-main">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        {/* Luxury Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={home}
            alt="Luxury Interior Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bg-main/90 md:bg-bg-main/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block px-4 py-1.5 bg-accent/20 rounded-full mb-8 shadow-luxury-glow backdrop-blur-sm"
              >
                <span className="text-accent text-[0.65rem] uppercase tracking-[0.4em] font-semibold">Premium Architectural Interiors</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[1.05] mb-10 font-bold tracking-tight"
              >
                Transform Your <span className="italic font-normal">Space</span> <br />
                <span className="text-3xl md:text-5xl lg:text-6xl block mt-4 font-light tracking-widest text-text-secondary uppercase">
                  with <span className="text-accent font-bold"> RR Interiors</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="text-xl md:text-2xl text-text-secondary mb-14 max-w-xl leading-relaxed font-light"
              >
                We craft bespoke interior and carpentry solutions that harmonize form, function, and silent luxury.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-8"
              >
                <Button to="/projects" variant="primary" className="hover:scale-105 hover:shadow-luxury-glow transition-all duration-300">
                  Explore Portfolio
                </Button>
                <Button to="/contact" variant="secondary" className="hover:scale-105 transition-all duration-300">
                  Start a Project
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-end"
            >
              <div className="space-y-4 md:space-y-10 group">
                <div className="relative h-[400px] md:h-[450px] rounded-full overflow-hidden shadow-luxury">
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-accent/5 mix-blend-multiply z-10 pointer-events-none"></div>

                  <img
                    src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=1200&q=80"
                    alt="Minimalist Luxury Bedroom"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
              </div>
              <div className="space-y-4 md:space-y-10 group">
                <div className="relative h-[450px] md:h-[600px] rounded-full overflow-hidden shadow-luxury border-4 md:border-8 border-bg-main">
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-accent/5 mix-blend-multiply z-10 pointer-events-none"></div>

                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                    alt="Elegant Modern Living Room"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-bg-secondary rounded-[3rem_3rem_0_0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Our Services</h2>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">End-to-end architectural interior solutions tailored to your unique lifestyle and aesthetic preferences.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {servicesData.slice(0, 3).map((service) => (
              <motion.div key={service.id} variants={staggerItemFadeUp}>
                <Card
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  ctaText="Discovery"
                  onCtaClick={() => navigate("/Contact")}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <Button to="/services" variant="secondary">
              Explore All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us / Design Philosophy */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#F5F1E8] via-[#FAF8F3] to-[#F5F1E8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-[#2C2C2C] mb-6">Our Design Philosophy</h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-sm md:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto mt-4"
            >
              We create thoughtfully designed interiors that blend functionality, elegance, and timeless craftsmanship — tailored to your lifestyle.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {featuresData.map((feature) => (
              <motion.div
                key={feature.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                className="relative bg-white/40 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-xl border border-white/30 text-center group hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Subtle glass gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F5F1E8] text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300">
                    <feature.icon size={30} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-[#2C2C2C] mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed line-clamp-3 md:line-clamp-none">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-bg-secondary rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Gallery of Works</h2>
              <p className="text-text-secondary text-lg leading-relaxed">A curated selection of our most recent transformations across premium residential and commercial spaces.</p>
            </motion.div>
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to="/projects" className="inline-flex items-center text-accent uppercase tracking-widest text-sm font-semibold hover:gap-4 transition-all duration-300">
                View Full Collection <ArrowRight className="ml-3" size={20} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                variants={zoomFadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-luxury"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-transparent to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-accent text-xs uppercase tracking-widest mb-3 font-medium">{project.category}</span>
                  <h3 className="text-white text-3xl font-serif">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Studio Map Section */}
      <LocationSection />

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-text-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-white">
          <motion.div
            initial={{ scale: 1.2, opacity: 0.1 }}
            whileInView={{ scale: 1, opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
          ></motion.div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl text-white/90 md:text-6xl mb-8">Ready to define your space?</h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed italic font-light">Elevate your living experience with bespoke architectural interiors designed just for you.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button to="/contact" className="w-full sm:w-auto">
                Secure Consultation
              </Button>
              <a href="tel:+918610277404" className="flex items-center text-white/90 hover:text-white uppercase tracking-widest text-sm font-medium transition-colors">
                <PhoneCall className="mr-4 text-accent" size={24} /> Call Studio
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

