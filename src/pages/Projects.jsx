import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/mockData';
import { X, ArrowUpRight } from 'lucide-react';
import { fadeUpVariant } from '../utils/motion';
import Button from '../components/Button';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Wardrobe', 'Kitchen', 'TV Unit'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

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
          <motion.span variants={fadeUpVariant} className="text-accent text-xs uppercase tracking-[0.3em] font-medium mb-6 block">Our Collection</motion.span>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Gallery of <span className="italic font-normal">Works</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">A curated narrative of architectural transformations and bespoke carpentry excellence.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
        {/* Filter Buttons */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-500 ${filter === cat
                ? 'bg-accent text-white shadow-luxury scale-105'
                : 'bg-bg-secondary text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                key={project.id}
                className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-luxury cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/90 via-text-primary/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-accent text-xs uppercase tracking-widest mb-2 block font-medium">{project.category}</span>
                      <h3 className="text-white text-2xl font-serif">{project.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-text-secondary py-24 italic font-light text-xl">
            No masterpieces found in this category yet.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-text-primary/95 flex items-center justify-center p-6 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors focus:outline-none z-[102]"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="max-w-6xl w-full flex flex-col lg:flex-row bg-bg-main rounded-[3rem] overflow-hidden shadow-2xl relative z-[101]"
            >
              <div className="w-full lg:w-2/3 lg:h-[80vh] h-[50vh] relative overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/3 p-10 lg:p-16 flex flex-col justify-center bg-bg-secondary">
                <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium mb-6 block">Project Detail</span>
                <h3 className="text-4xl lg:text-5xl mb-8 leading-tight">{selectedImage.title}</h3>
                <p className="text-text-secondary mb-12 leading-loose font-light">
                  A comprehensive {selectedImage.category.toLowerCase()} transformation emphasizing minimalist architectural lines and premium material honesty. Crafted specifically for a discerning lifestyle.
                </p>

                <Button
                  to={`https://wa.me/918610277404?text=Hi, I am interested in a design similar to the ${selectedImage.title} project`}
                  className="w-full"
                  onClick={() => setSelectedImage(null)}
                >
                  Consult Studio
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

