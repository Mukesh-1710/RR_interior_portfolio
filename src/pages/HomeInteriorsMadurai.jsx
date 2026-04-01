import { motion } from 'framer-motion';
import { Award, CheckCircle2, ArrowRight, Home, Layout, MessageCircle } from 'lucide-react';
import { fadeUpVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';
import Button from '../components/Button';

const HomeInteriorsMadurai = () => {
  return (
    <div className="bg-bg-main min-h-screen pb-24 overflow-hidden">
      {/* Hero / Header */}
      <section className="pt-48 pb-32 bg-gradient-to-br from-[#F5F1E8] via-[#FAF8F3] to-[#F5F1E8] relative border-b border-white/20 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
            <motion.span variants={fadeUpVariant} className="text-accent text-[0.65rem] uppercase tracking-[0.4em] font-semibold mb-8 block">End-to-End Residential Excellence</motion.span>
            <h1 className="text-5xl md:text-8xl font-serif mb-12 leading-[1.1] tracking-tight text-[#2C2C2C]">
              Bespoke <span className="italic font-normal">Home Interiors Madurai</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#6B6B6B] max-w-4xl mx-auto font-light leading-relaxed mb-12">
              From hand-drawn sketches to meticulous precision, we craft every corner to reflect your unique lifestyle. We are the premier choice for <span className="text-[#2C2C2C] font-normal italic">Residential Transformations</span> in Madurai.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button to="/contact">Secure Free Consultation</Button>
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
              Reimaging <span className="italic font-normal">Living Spaces</span> with Silent Architectural Luxury.
            </h2>
            <div className="text-lg text-[#6B6B6B] leading-loose font-light space-y-8">
              <p>
                A house is a structure, but a home is a narrative. When searching for the <span className="text-[#2C2C2C] font-medium underline decoration-[#D4AF37]/30 underline-offset-4">best home interiors in Madurai</span>, 
                you're essentially deciding on the environment in which you'll create your life's most precious memories. 
                At RR Interiors, we take this responsibility with the utmost solemnity. 
                Our studio focuses on end-to-end residential transformations, covering everything from grand living rooms to meditative master suites.
              </p>
              <p>
                Our architectural approach to <span className="italic">home interiors in Madurai</span> is founded on three pillars: space optimization, aesthetic harmony, and functional longevity. 
                We don't believe in one-size-fits-all solutions. Our team of skilled designers and generational carpenters work in synchronization to tailor every piece 
                of furniture—from custom TV units and sliding wardrobes to intricate false ceiling designs—to perfectly complement your lifestyle and spatial constraints.
              </p>
              <p>
                We use high-grade, sustainable materials and the latest in precision hardware to ensure that your home doesn't just look beautiful on day one, but remains functional and refined for decades to come. 
                By controlling the entire process from in-house design to meticulous installation, we guarantee a level of transparency and quality control that has made us 
                one of Madurai's most trusted names in luxury home transformations.
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
            <h3 className="text-2xl font-serif text-[#2C2C2C] mb-4">Complete Home Solutions:</h3>
            {[
              { title: 'Living Room Masterpieces', desc: 'Crafting the focal point of your home with custom TV consoles, partition units, and bespoke sofas.', icon: Home },
              { title: 'Bedroom Sanctuaries', desc: 'Space-saving sliding wardrobes and meditative bed designs built for rest.', icon: Layout },
              { title: 'Architectural False Ceilings', desc: 'Intelligent lighting and layered ceiling designs that transform the mood of any room.', icon: Award },
              { title: 'Full Home Management', desc: 'Providing a seamless, single-point contact from initial civil checks to final handover.', icon: CheckCircle2 },
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
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-8 italic">Your dream home begins with a conversation.</h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-12 font-light">Join 100+ happy families in Madurai who have transformed their houses into lifelong legacies.</p>
          <div className="flex justify-center">
            <a href="/Contact" className="inline-flex items-center gap-4 text-accent uppercase tracking-widest text-sm font-semibold hover:gap-6 transition-all duration-300">
              Start Your Consultation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeInteriorsMadurai;
