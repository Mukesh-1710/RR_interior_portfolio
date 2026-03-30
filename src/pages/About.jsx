import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="pt-32 pb-20 bg-gray-50 border-b relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About RR Interiors</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Reimagining living spaces with quality craftsmanship and affordable luxury.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="RR Interiors Design Team Work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full z-0 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent-light/30 rounded-full z-0 blur-3xl"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in the heart of Madurai, RR Interiors is a passionate team of designers and craftsmen dedicated to transforming your house into a dream home. We believe that premium design should not come with a prohibitive price tag.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of real-world experience, we specialize in delivering high-quality modular kitchens, elegant wardrobes, and complete home interiors that reflect your personal style while maximizing functionality.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            <ul className="space-y-4">
              {[
                { title: 'Uncompromising Quality', desc: 'We source the best materials ensuring absolute durability.' },
                { title: 'Affordable Luxury', desc: 'Transparent pricing with no hidden costs.' },
                { title: 'Client-Centric Approach', desc: 'Your vision guides our design process seamlessly.' },
                { title: 'Timely Execution', desc: 'We stick to our promises and deliver on schedule.' },
              ].map((val, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="text-accent mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <strong className="block text-gray-900 text-lg">{val.title}</strong>
                    <span className="text-gray-600">{val.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
