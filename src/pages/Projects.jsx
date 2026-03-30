import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/mockData';
import { X } from 'lucide-react';
import { fadeUpVariant } from '../utils/motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Wardrobe', 'Kitchen', 'TV Unit'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* Header */}
      <div className="pt-32 pb-20 bg-gray-50 border-b overflow-hidden">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our finest creations. Click on any project to view details.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        {/* Filter Buttons */}
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-accent text-white shadow-md scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                key={project.id} 
                className="group relative rounded-xl overflow-hidden aspect-[9/16] shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-accent-light text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No projects found in this category.
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
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-accent-light transition-colors focus:outline-none z-[101]"
            >
              <X size={36} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-5xl w-full flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl relative z-[101]"
            >
              <div className="w-full md:w-2/3 md:h-[85vh] h-[60vh] relative overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-gray-50">
                <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2">{selectedImage.category}</span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  This {selectedImage.category.toLowerCase()} project features premium finishes and smart spatial planning to maximize both aesthetics and utility.
                </p>
                
                <a 
                  href={`https://wa.me/918610277404?text=Hi, I want a design similar to the ${selectedImage.title} project`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-accent text-white text-center py-4 rounded-full font-bold hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300 transform"
                  onClick={() => setSelectedImage(null)}
                >
                  Inquire About This Design
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
