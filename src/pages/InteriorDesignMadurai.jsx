import { motion } from 'framer-motion';
import { Award, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { fadeUpVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';
import Button from '../components/Button';

const InteriorDesignMadurai = () => {
  return (
    <div className="bg-bg-main min-h-screen pb-24 overflow-hidden">
      {/* Hero / Header */}
      <section className="pt-48 pb-32 bg-gradient-to-br from-[#F5F1E8] via-[#FAF8F3] to-[#F5F1E8] relative border-b border-white/20 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
            <motion.span variants={fadeUpVariant} className="text-accent text-[0.65rem] uppercase tracking-[0.4em] font-semibold mb-8 block">Bespoke Architectural Planning</motion.span>
            <h1 className="text-5xl md:text-8xl font-serif mb-12 leading-[1.1] tracking-tight text-[#2C2C2C]">
              Leading <span className="italic font-normal">Interior Designers in Madurai</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#6B6B6B] max-w-4xl mx-auto font-light leading-relaxed mb-12">
              Transforming residential and commercial spaces into sanctuaries of <span className="text-[#2C2C2C] font-normal italic">Silent Luxury</span>. With over 50 years of generational expertise, we are the architectural pulse of Temple City.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button to="/contact">Discuss Your Vision</Button>
              <a href="https://wa.me/918610277404" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3.5 bg-green-600/10 text-green-700 border border-green-600/20 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all">
                <MessageCircle size={18} /> WhatsApp Studio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Narrative - 400+ Words SEO Content */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] leading-tight">
              Reimagining <span className="italic font-normal">Homes in Madurai</span> through Precision and Trust.
            </h2>
            <div className="text-lg text-[#6B6B6B] leading-loose font-light space-y-8">
              <p>
                When you're searching for the <span className="text-[#2C2C2C] font-medium underline decoration-[#D4AF37]/30 underline-offset-4">best interior designers in Madurai</span>, 
                you're not just looking for a decorator—you're seeking an architectural partner. RR Interiors represents 50 years of heritage in premium carpentry and bespoke lifestyle design. 
                Our team understands that a home is more than its walls; it's the rhythm of your life reflected in every joint, material, and shadow.
              </p>
              <p>
                Madurai's unique climate and cultural richness demand an interior approach that respects both tradition and contemporary minimalism. 
                Our studio specializes in creating spaces that breathe. We use high-grade, sustainable materials sourced carefully to ensure your interiors age gracefully alongside your memories. 
                From grand residential villas to compact modern apartments, our <span className="italic">bespoke narrative</span> ensures that no two homes look alike.
              </p>
              <p>
                What sets us apart is our obsessive attention to detail. We don't just design; we craft. Our in-house manufacturing and precision hardware integration (Hettich, Hafele) 
                allow us to deliver a finish that is rarely seen in the mass market. We are committed to an end-to-end service philosophy that covers everything from 3D conceptualization 
                to final installation, all while adhering to strict timelines and budget transparency.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >
            <h3 className="text-2xl font-serif text-[#2C2C2C] mb-4">Why Madurai Trusts Us:</h3>
            {[
              { title: 'Generational Craft', desc: '50+ years of carpentry knowledge passed down to deliver absolute structural integrity.', icon: Award },
              { title: 'Premium Material Selection', desc: 'Working with BWP Plywood, imported veneers, and high-tensile hardware.', icon: CheckCircle2 },
              { title: 'Architectural Minimalism', desc: 'Designs that emphasize space, light, and functionality over cluttered aesthetics.', icon: CheckCircle2 },
              { title: 'Madurai-Specific Insights', desc: 'Expertise in local weather-resistant finishes and functional modularity.', icon: CheckCircle2 },
            ].map((benefit, idx) => (
              <motion.div key={idx} variants={staggerItemFadeUp} className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl group hover:bg-white/60 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#F5F1E8] rounded-full flex items-center justify-center text-[#D4AF37] flex-shrink-0 group-hover:rotate-[10deg] transition-transform duration-500">
                    <benefit.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[#2C2C2C] mb-2">{benefit.title}</h4>
                    <p className="text-[#6B6B6B] text-sm font-light leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internal CTA */}
      <section className="py-24 bg-gradient-to-br from-[#FAF8F3] to-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-8 italic">Ready to elevate your space?</h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-12 font-light">Join 100+ families in Madurai who have transformed their houses into bespoke sanctuaries.</p>
          <div className="flex justify-center">
            <a href="tel:+918610277404" className="inline-flex items-center gap-4 text-accent uppercase tracking-widest text-sm font-semibold hover:gap-6 transition-all duration-300">
              Start Your Consultation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesignMadurai;
