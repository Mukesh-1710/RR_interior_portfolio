import Button from './Button';
import { motion } from 'framer-motion';
import { cardHoverVariant } from '../utils/motion';

const Card = ({ title, description, image, ctaText = "Get Quote", onCtaClick, className="" }) => {
  return (
    <motion.div 
      variants={cardHoverVariant}
      initial="rest"
      whileHover="hover"
      className={`bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100 ${className}`}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>
        
        
        {description && (
          <p className="text-gray-600 text-sm mb-6 line-clamp-3">
            {description}
          </p>
        )}
        
        {onCtaClick && (
          <Button variant="outline" className="w-full py-2.5" onClick={onCtaClick}>
            {ctaText}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
