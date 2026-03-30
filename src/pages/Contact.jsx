import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';

const Contact = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 overflow-hidden">
      {/* Header */}
      <div className="pt-40 pb-28 bg-gray-800 relative">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Let's discuss your dream home. Get in touch for customized designs and quotes.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Contact Details */}
          <motion.div 
            variants={slideInLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Get In Touch</h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-lg">
              We'd love to hear from you. Whether you have a question about our services, want to discuss a potential project, or just want to say hello, our team is ready to answer all your questions.
            </p>

            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {[
                { icon: MapPin, title: "Our Studio", desc: "123 Design Street, Anna Nagar,\nMadurai, Tamil Nadu 625020", link: null },
                { icon: Phone, title: "Phone Number", desc: "+91 86102 77404", link: "tel:+918610277404" },
                { icon: Mail, title: "Email Address", desc: "hello@rrinterior.com", link: "mailto:hello@rrinterior.com" }
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItemFadeUp} className="flex items-start group">
                  <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-accent mr-6 flex-shrink-0 group-hover:bg-accent group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 group-hover:shadow-md">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <strong className="block text-gray-900 text-xl font-semibold mb-2">{item.title}</strong>
                    {item.link ? (
                      <a href={item.link} className="text-gray-500 hover:text-accent transition-colors text-lg inline-block whitespace-pre-line">{item.desc}</a>
                    ) : (
                      <span className="text-gray-500 leading-relaxed text-lg whitespace-pre-line">{item.desc}</span>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={slideInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-gray-900 placeholder-gray-400 font-medium" placeholder="John Doe" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-gray-900 placeholder-gray-400 font-medium" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-gray-900 appearance-none cursor-pointer font-medium">
                    <option className="text-gray-900">Full Home Interior</option>
                    <option className="text-gray-900">Modular Kitchen</option>
                    <option className="text-gray-900">Wardrobe Design</option>
                    <option className="text-gray-900">TV Unit / False Ceiling</option>
                    <option className="text-gray-900">Other / Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none text-gray-900 placeholder-gray-400 font-medium" placeholder="Briefly describe your requirements..."></textarea>
                </div>

                <motion.div 
                  className="pt-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" className="w-full py-4 text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    Send Request
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
