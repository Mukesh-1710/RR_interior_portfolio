import { motion } from 'framer-motion';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import { fadeUpVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';
import Button from '../components/Button';

const ModularKitchenMadurai = () => {
  return (
    <div className="bg-bg-main min-h-screen pb-24 overflow-hidden">
      {/* Hero / Header */}
      <section className="pt-48 pb-32 bg-gradient-to-br from-[#F5F1E8] via-[#FAF8F3] to-[#F5F1E8] relative border-b border-white/20 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
            <motion.span variants={fadeUpVariant} className="text-accent text-[0.65rem] uppercase tracking-[0.4em] font-semibold mb-8 block">Functional Luxury</motion.span>
            <h1 className="text-5xl md:text-8xl font-serif mb-12 leading-[1.1] tracking-tight text-[#2C2C2C]">
              Premium <span className="italic font-normal">Modular Kitchen Madurai</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#6B6B6B] max-w-4xl mx-auto font-light leading-relaxed mb-12">
              Cook in a masterpiece of architectural precision and efficiency. We are the experts in delivering the <span className="text-[#2C2C2C] font-normal italic">Most Durable Kitchens</span> in Madurai.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button to="/contact">Get Custom Quote</Button>
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
              Crafting <span className="italic font-normal">Gourmet Spaces</span> with Marine-Grade Precision.
            </h2>
            <div className="text-lg text-[#6B6B6B] leading-loose font-light space-y-8">
              <p>
                As the heart of your home, your kitchen deserves an <span className="text-[#2C2C2C] font-medium underline decoration-[#D4AF37]/30 underline-offset-4">expertly designed modular kitchen in Madurai</span>. 
                At RR Interiors, we blend the aesthetics of European luxury with the harsh realities of Indian cooking routines. 
                Whether you prefer a sleek U-shaped layout, a spacious L-shaped setup, or a modern island configuration, our team ensures every inch is utilized with surgical accuracy.
              </p>
              <p>
                In Madurai's tropical climate, humidity and moisture resistance are non-negotiable. That's why we exclusively use **BWP (Boiling Water Proof) Plywood** 
                and high-tensile laminates that withstand decades of use. Unlike standard modular vendors, our carpentry background allows us to provide a level of 
                customization that goes beyond "pre-fab" boxes—ensuring your kitchen integrates seamlessly with your unique wall contours and electrical layouts.
              </p>
              <p>
                Our hardware philosophy is centered on silent elegance. We partner with global leaders like **Hettich, Hafele, and Blum** to provide soft-close 
                tandem boxes, corner solutions, and vertical lift systems that transform daily tasks into a meditative experience. 
                By choosing RR Interiors for your modular kitchen project, you're investing in a lifetime of effortless culinary creation.
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
            <h3 className="text-2xl font-serif text-[#2C2C2C] mb-4">Kitchen Performance Highlights:</h3>
            {[
              { title: 'BWP Marine Grade Plywood', desc: 'Boiling water-proof termite-resistant cores for total durability against humidity.', icon: ShieldCheck },
              { title: 'Soft-Close Hardware', desc: 'Seamless, silent interaction with high-end Hettich/Hafele hardware components.', icon: Award },
              { title: 'Zero Maintenance Finishes', desc: 'Fingerprint-resistant, scratch-resistant acrylic or glossy laminates.', icon: CheckCircle2 },
              { title: 'Rapid Studio Delivery', desc: 'From final 3D design approval to professional installation within 4-6 weeks.', icon: Clock },
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
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-8 italic">Define your culinary space.</h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-12 font-light">Join 100+ happy families in Madurai who have transformed their cooking experience.</p>
          <div className="flex justify-center">
            <a href="/projects" className="inline-flex items-center gap-4 text-accent uppercase tracking-widest text-sm font-semibold hover:gap-6 transition-all duration-300">
              View Our Recent Work <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModularKitchenMadurai;
