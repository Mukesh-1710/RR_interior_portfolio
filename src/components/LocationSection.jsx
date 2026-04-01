import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '../utils/motion';

const LocationSection = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6752741910063!2d78.11406987479194!3d9.877586890221702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5f447020ef7%3A0xb47e7f50821553e6!2sRR%20Interiors!5e0!3m2!1sen!2sin!4v1775052412040!5m2!1sen!2sin";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=9.877587,78.114070";

  return (
    <section className="py-24 bg-bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-accent text-[0.65rem] uppercase tracking-[0.4em] font-semibold mb-6 block">Our Presence</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[#2C2C2C]">Visit Our Studio</h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto font-light leading-relaxed">
            Located in the heart of Madurai, our studio is where architectural visions come to life.
            Come and experience the silent luxury of <span className="text-[#2C2C2C] font-normal italic">RR Interiors</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 group cursor-pointer"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RR Interiors Madurai Studio Location"
              className="grayscale-[0.3] hover:grayscale-0 transition-all duration-700 ease-in-out contrast-[1.05] brightness-[0.95]"
            ></iframe>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-10 lg:pl-8"
          >
            <div>
              <h3 className="text-3xl font-serif mb-8 text-[#2C2C2C]">Studio <span className="italic font-normal">Headquarters</span></h3>
              <div className="space-y-8">
                {/* Address Icon Block */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-[#F5F1E8] rounded-full flex items-center justify-center text-[#D4AF37] flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <MapPin size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#2C2C2C] mb-2 uppercase tracking-widest text-[0.7rem]">Location</h4>
                    <p className="text-[#6B6B6B] text-lg font-light leading-relaxed whitespace-pre-line">
                      <span className="text-[#2C2C2C] font-semibold tracking-tight">RR Interiors</span>, <span className="italic">Interior Designers in Madurai</span><br />
                      By Pass Road, Avaniyapuram,<br />
                      Madurai, Tamil Nadu 625012
                    </p>
                  </div>
                </div>

                {/* Phone Icon Block */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-[#F5F1E8] rounded-full flex items-center justify-center text-[#D4AF37] flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Phone size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#2C2C2C] mb-2 uppercase tracking-widest text-[0.7rem]">Consult Studio</h4>
                    <a href="tel:+918610277404" className="text-[#6B6B6B] text-xl font-light hover:text-[#D4AF37] transition-colors leading-relaxed">+91 86102 77404</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-start gap-6">
              {/* Primary Direction CTA */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-text-primary rounded-full group bg-gradient-to-br from-accent to-[#D4AF37] group-hover:from-accent group-hover:to-[#D4AF37] hover:text-white transition-all duration-300"
                >
                  <span className="relative px-8 py-3.5 transition-all ease-in duration-75 bg-white group-hover:bg-opacity-0 rounded-full flex items-center gap-3 tracking-widest font-semibold uppercase text-xs">
                    Get Directions <ExternalLink size={18} />
                  </span>
                </a>
              </div>

              {/* Secondary Link */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-semibold text-[#6B6B6B] hover:text-[#D4AF37] underline decoration-[#D4AF37]/30 underline-offset-4 transition-all"
              >
                View on Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hidden SEO Keywords Paragraph */}
      <div className="sr-only">
        <p>
          RR Interiors is one of the best interior designers in Madurai located in Avaniyapuram.
          We provide home interior design, modular kitchen design, and carpentry services in Madurai.
        </p>
      </div>
    </section>
  );
};

export default LocationSection;
