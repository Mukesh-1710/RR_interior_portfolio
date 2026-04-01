import { Award, Briefcase, Gem, Users, ArrowRight } from 'lucide-react';
import { fadeUpVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="bg-bg-main min-h-screen pb-24 overflow-hidden">
      {/* Header & Legacy Stats */}
      <section className="pt-48 pb-32 bg-gradient-to-br from-[#F5F1E8] via-[#FAF8F3] to-[#F5F1E8] relative border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUpVariant} className="text-accent text-[0.65rem] uppercase tracking-[0.4em] font-semibold mb-8 block">
              Our Legacy & Vision
            </motion.span>
            <h1 className="text-5xl md:text-8xl font-serif mb-10 leading-[1.1] tracking-tight text-[#2C2C2C]">
              Crafting <span className="italic font-normal">Excellence</span> Since 1974
            </h1>
            <p className="text-xl md:text-2xl text-[#6B6B6B] max-w-3xl mx-auto font-light leading-relaxed mb-16">
              As one of the leading <span className="text-[#2C2C2C] font-normal italic">Interior Designers in Madurai</span>, 
              we reimagine living spaces through contemporary minimalism and timeless luxury.
            </p>

            {/* Key Stats Bar */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-12 md:gap-24 pt-8 border-t border-black/5"
            >
              {[
                { label: 'Years of Experience', value: '50+' },
                { label: 'Projects Completed', value: '100+' },
                { label: 'Creative Excellence', value: 'Awards' },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={staggerItemFadeUp} className="text-center group">
                  <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                  <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#6B6B6B] font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10">
              <motion.img 
                style={{ scale }}
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80" 
                alt="RR Interiors Madurai Studio Work" 
                className="w-full h-full object-cover origin-center shadow-inner"
              />
              {/* Subtle gold overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent pointer-events-none" />
            </div>
            {/* Decorative background shape */}
            <div className="absolute top-0 right-0 w-full h-full bg-[#FAF8F3] rounded-[3.5rem] -z-0 translate-x-12 -translate-y-12 border border-black/5"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight text-[#2C2C2C]">
              The Story of <span className="italic font-normal">RR Interiors</span>
            </h2>
            <p className="text-lg md:text-xl text-[#6B6B6B] mb-8 leading-loose font-light">
              Based in the legendary city of Madurai, <span className="text-[#2C2C2C] font-normal italic">RR Interiors Madurai</span> is an architectural studio dedicated to the art of *Bespoke Living*. 
              We believe that the *Best Interior in Madurai* is one that tells a story—your story.
            </p>
            <p className="text-lg md:text-xl text-[#6B6B6B] mb-16 leading-loose font-light">
              With generations of expertise in *Premium Carpentry* and modular innovations, our studio brings a meditative approach to every detail. From the initial hand-drawn sketch to the final touch of *Excellence*, we ensure your sanctuary is built with precision and soul.
            </p>

            <h3 className="text-2xl md:text-3xl font-serif mb-12 leading-tight text-[#2C2C2C]">Our Core Principles</h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { title: 'Global Heritage', desc: '50 years of generational knowledge in architectural carpentry and craft.', icon: Award },
                { title: 'Professional Ethos', desc: 'Managed by specialized teams delivering over 100+ premium projects annually.', icon: Briefcase },
                { title: 'Silent Luxury', desc: 'Sourcing the finest materials to ensure a quiet, sophisticated atmosphere.', icon: Gem },
                { title: 'Client Centricity', desc: 'A deeply collaborative process that places your vision at the center.', icon: Users },
              ].map((val, idx) => (
                <motion.div 
                  key={idx} 
                  variants={staggerItemFadeUp} 
                  className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl group hover:scale-105 hover:bg-white/60 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-full bg-[#F5F1E8] text-[#D4AF37] flex items-center justify-center mb-6 shadow-md group-hover:rotate-[10deg] transition-transform duration-500">
                    <val.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[#2C2C2C] mb-3">{val.title}</h4>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed font-light">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

