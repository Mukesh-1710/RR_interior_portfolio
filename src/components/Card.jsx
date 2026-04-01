import Button from './Button';
import { motion } from 'framer-motion';
import { cardHoverVariant } from '../utils/motion';
import { X } from 'lucide-react';

const Card = ({ title, description, image, ctaText = "Discovery", onCtaClick, onClose, className = "" }) => {
  return (
    <motion.div
      variants={cardHoverVariant}
      initial="rest"
      whileHover="hover"
      className={`bg-surface rounded-2xl overflow-hidden cursor-pointer shadow-luxury group transition-all duration-500 w-full ${className}`}
    >
      {/* Image Container with Fixed Heights per Breakpoint */}
      <div className="relative overflow-hidden h-[220px] md:h-[280px] lg:h-[350px]">
        {/* Close Button (Touch-Friendly) */}
        {onClose && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 md:w-9 md:h-9 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg group-hover:opacity-100 opacity-90"
          >
            <X size={18} strokeWidth={2} />
          </button>
        )}

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5 lg:p-8 space-y-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
          {title}
        </h3>

        {description && (
          <p className="text-text-secondary text-sm lg:text-base line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}

        <div className="pt-2">
          {onCtaClick && (
            <Button
              variant="secondary"
              className="w-full py-3.5 md:py-4 text-xs uppercase tracking-widest min-h-[44px]"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

