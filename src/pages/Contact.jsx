import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';
import { useState } from 'react';

import LocationSection from '../components/LocationSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Full Home Interior",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    const text = `Hello, I have an enquiry:

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/918610277404?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-bg-main min-h-screen pb-24 overflow-hidden">
      {/* Header */}
      <div className="pt-40 pb-24 bg-bg-secondary relative">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 lg:px-12 text-center"
        >
          <motion.span variants={fadeUpVariant} className="text-accent text-xs uppercase tracking-[0.3em] font-medium mb-6 block">Get in Touch</motion.span>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Studio <span className="italic font-normal">Inquiry</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Let's discuss the architectural narrative of your future home.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Contact Details */}
          <motion.div
            variants={slideInLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-4xl md:text-5xl mb-10 leading-tight">Connect with <span className="italic font-normal">Us</span></h2>
            <p className="text-text-secondary text-lg mb-12 max-w-lg leading-loose font-light">
              We welcome dialogues about bespoke design and premium carpentry. Our studio is dedicated to translating your vision into a silent luxury statement.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: MapPin, title: "The Studio", desc: "By Pass Road, Avaniyapuram,\nMadurai, Tamil Nadu 625012", link: null },
                { icon: Phone, title: "Secure Line", desc: "+91 86102 77404", link: "tel:+918610277404" },
                { icon: Mail, title: "Studio Correspondence", desc: "rrinteriorsmdu@gmail.com", link: "mailto:rrinteriorsmdu@gmail.com" }
              ].map((item, index) => (
                <motion.div key={index} variants={staggerItemFadeUp} className="flex items-start group gap-6">
                  <div className="w-14 h-14 bg-surface shadow-luxury rounded-full flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-text-secondary hover:text-accent transition-colors text-lg inline-block whitespace-pre-line font-light">{item.desc}</a>
                    ) : (
                      <span className="text-text-secondary text-lg whitespace-pre-line font-light">{item.desc}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-surface p-10 lg:p-16 rounded-[3rem] shadow-luxury relative overflow-hidden"
          >
            <div className="relative">
              <h3 className="text-3xl mb-12 leading-tight">Send a Message</h3>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-text-secondary font-medium">Full Identity</label>
                    <input type="text" name="name" onChange={handleChange} className="w-full bg-bg-main/50 px-6 py-4 rounded-2xl outline-none focus:bg-white focus:ring-1 focus:ring-accent transition-all text-text-primary placeholder:text-text-secondary/50" placeholder="Your Name" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-text-secondary font-medium">Secure Phone</label>
                    <input type="tel" name="phone" onChange={handleChange} className="w-full bg-bg-main/50 px-6 py-4 rounded-2xl outline-none focus:bg-white focus:ring-1 focus:ring-accent transition-all text-text-primary placeholder:text-text-secondary/50" placeholder="+91 XXXXX XXXXX" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-text-secondary font-medium">Inquiry Scope</label>
                    <select name="service" onChange={handleChange} className="w-full bg-bg-main/50 px-6 py-4 rounded-2xl outline-none focus:bg-white focus:ring-1 focus:ring-accent transition-all text-text-primary appearance-none cursor-pointer">
                      <option>Full Home Interior</option>
                      <option>Modular Kitchen</option>
                      <option>Wardrobe Design</option>
                      <option>TV Unit / False Ceiling</option>
                      <option>Other / Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-text-secondary font-medium">Narrative Message</label>
                    <textarea rows={4} name="message" onChange={handleChange} className="w-full bg-bg-main/50 px-6 py-4 rounded-2xl outline-none focus:bg-white focus:ring-1 focus:ring-accent transition-all text-text-primary resize-none placeholder:text-text-secondary/50" placeholder="Tell us about your project..."></textarea>
                  </div>
                </div>

                <div className="pt-4 flex">
                  <Button type="submit" className="w-full">
                    Consult Studio
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <LocationSection />
    </div>
  );
};

export default Contact;

