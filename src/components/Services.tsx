import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'

const Services = () => {
  const [ref, inView] = useInView(0.1, '0px 0px -20%');

  const services = [
    {
      title: 'Full Home Design',
      description: 'Complete interior design services from concept to completion, creating cohesive spaces throughout your home.',
      image: card1
    },
    {
      title: 'Space Planning',
      description: 'Thoughtful layout design that maximizes functionality while maintaining aesthetic appeal.',
      image: card2
    },
    {
      title: 'Color Consultation',
      description: 'Expert color selection and palette development to create the perfect mood and atmosphere.',
      image: card3
    },
    {
      title: 'Furniture Selection',
      description: 'Curated furniture and decor selection that reflects your style and enhances your lifestyle.',
      image: card4
    },
    {
      title: 'Project Management',
      description: 'Comprehensive project oversight ensuring timelines, budgets, and quality standards are met.',
      image: card5
    },
    {
      title: 'Styling & Staging',
      description: 'Final styling touches and home staging services to showcase your space at its absolute best.',
      image: card6
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: window.innerWidth < 768 ? 0.2 : 0.8,
            ease: "easeOut"
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Services
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive design services tailored to create spaces that are uniquely yours
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.2 : 0.6,
                delay: window.innerWidth < 768 ? 0 : index * 0.1,
                ease: "easeOut"
              }}
              className="group bg-stone-50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;