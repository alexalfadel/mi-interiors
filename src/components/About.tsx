import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, inView] = useInView(0.1, '0px 0px -20%');

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: window.innerWidth < 768 ? 0.2 : 0.8,
              ease: "easeOut"
            }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                About Miranda
              </h2>
              <div className="w-20 h-1 bg-green-700 mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                With over a decade of experience in interior design, Miranda Irwin brings a unique blend 
                of creativity, functionality, and timeless elegance to every project. Her approach centers 
                on understanding each client's lifestyle and vision to create spaces that are both beautiful 
                and deeply personal.
              </p>
              
              <p>
                Miranda's design philosophy emphasizes the importance of natural light, thoughtful space 
                planning, and the careful curation of textures, colors, and furnishings that tell a story. 
                She believes that great design should enhance daily life while reflecting the personality 
                and values of those who inhabit the space.
              </p>
              
              <p>
                From full-home renovations to single-room refreshes, Miranda works closely with clients 
                to transform their spaces into sanctuaries that inspire and comfort for years to come.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: window.innerWidth < 768 ? 0.25 : 0.8,
              delay: window.innerWidth < 768 ? 0 : 0.2,
              ease: "easeOut"
            }}
            className="relative"
          >
            <div className="aspect-square bg-gray-200 rounded-none shadow-2xl overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Miranda Irwin"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;