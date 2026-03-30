import { CheckCircle2 } from 'lucide-react';
import { fadeUpVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-surface-beige min-h-screen pb-24 overflow-hidden">
      {/* Header */}
      <div className="pt-40 pb-24 bg-white border-b border-black/5 relative">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 tracking-tight">About RR Interiors</h1>
          <p className="text-xl md:text-2xl text-charcoal-light max-w-2xl mx-auto font-light leading-relaxed">Reimagining living spaces with quality craftsmanship and affordable luxury.</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="RR Interiors Design Team Work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent/10 rounded-full z-0 blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-accent-light/30 rounded-full z-0 blur-3xl"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 tracking-tight">Who We Are</h2>
            <p className="text-lg text-charcoal-light mb-6 leading-relaxed">
              Based in the heart of Madurai, RR Interiors is a passionate team of designers and craftsmen dedicated to transforming your house into a dream home. We believe that premium design should not come with a prohibitive price tag.
            </p>
            <p className="text-lg text-charcoal-light mb-12 leading-relaxed">
              With years of real-world experience, we specialize in delivering high-quality modular kitchens, elegant wardrobes, and complete home interiors that reflect your personal style while maximizing functionality.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-8 tracking-tight">Our Core Values</h3>
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              {[
                { title: 'Uncompromising Quality', desc: 'We source the best materials ensuring absolute durability.' },
                { title: 'Affordable Luxury', desc: 'Transparent pricing with no hidden costs.' },
                { title: 'Client-Centric Approach', desc: 'Your vision guides our design process seamlessly.' },
                { title: 'Timely Execution', desc: 'We stick to our promises and deliver on schedule.' },
              ].map((val, idx) => (
                <motion.li key={idx} variants={staggerItemFadeUp} className="flex items-start bg-white p-6 rounded-2xl border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                  <CheckCircle2 className="text-accent mt-0.5 mr-5 flex-shrink-0" size={26} strokeWidth={2} />
                  <div>
                    <strong className="block text-charcoal text-xl font-bold mb-2">{val.title}</strong>
                    <span className="text-charcoal-light text-base leading-relaxed">{val.desc}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
