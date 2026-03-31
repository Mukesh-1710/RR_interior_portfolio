import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, staggerContainer, staggerItemFadeUp } from '../utils/motion';
import { useState } from 'react';

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
    <div className="bg-surface-beige min-h-screen pb-24 overflow-hidden">
      {/* Header */}
      <div className="pt-32 pb-24 bg-charcoal relative">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-white mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-surface-beige max-w-2xl mx-auto font-light">
            Let's discuss your dream home. Get in touch for customized designs and quotes.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Contact Details */}
          <motion.div
            variants={slideInLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Get In Touch</h2>
            <p className="text-charcoal-light text-lg mb-12 max-w-lg">
              We'd love to hear from you. Whether you have a question about our interior design services, want to discuss a potential project, or just want to say hello, our team is ready to answer all your questions.
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {[
                { icon: MapPin, title: "Our Studio", desc: "By Pass Road, Avaniyapuram,\nMadurai, Tamil Nadu 625012", link: null },
                { icon: Phone, title: "Phone Number", desc: "+91 86102 77404", link: "tel:+918610277404" },
                { icon: Mail, title: "Email Address", desc: "rrinteriorsmdu@gmail.com", link: "mailto:rrinteriorsmdu@gmail.com" }
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItemFadeUp} className="flex items-start group">
                  <div className="w-14 h-14 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5 rounded-2xl flex items-center justify-center text-accent mr-6 flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <strong className="block text-charcoal text-xl font-bold mb-2">{item.title}</strong>
                    {item.link ? (
                      <a href={item.link} className="text-charcoal-light hover:text-accent transition-colors text-lg inline-block whitespace-pre-line">{item.desc}</a>
                    ) : (
                      <span className="text-charcoal-light text-lg whitespace-pre-line">{item.desc}</span>
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
            className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="relative">
              <h3 className="text-3xl font-bold text-charcoal mb-8">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Full Name</label>
                  <input type="text" name="name" onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-black/10 outline-none focus:border-accent transition-colors text-charcoal" placeholder="John Doe" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Phone Number</label>
                  <input type="tel" name="phone" onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-black/10 outline-none focus:border-accent transition-colors text-charcoal" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Service Required</label>
                  <select name="service" onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-black/10 outline-none focus:border-accent transition-colors text-charcoal appearance-none cursor-pointer">
                    <option>Full Home Interior</option>
                    <option>Modular Kitchen</option>
                    <option>Wardrobe Design</option>
                    <option>TV Unit / False Ceiling</option>
                    <option>Other / Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Message</label>
                  <textarea rows={4} name="message" onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-white border border-black/10 outline-none focus:border-accent transition-colors resize-none text-charcoal" placeholder="Briefly describe your requirements..."></textarea>
                </div>

                <div className="pt-2 flex">
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
