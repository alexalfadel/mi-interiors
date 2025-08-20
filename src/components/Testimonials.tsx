import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Testimonials = () => {
  const [ref, inView] = useInView(0.1, '0px 0px -20%');

  const testimonials = [
    {
      name: 'Sarah Thompson',
      text: 'Miranda transformed our home into something beyond our wildest dreams. Her attention to detail and understanding of our family\'s needs was exceptional.'
    },
    {
      name: 'David Chen',
      text: 'Working with Miranda was an absolute pleasure. She listened to our vision and created spaces that perfectly balance style and functionality.'
    },
    {
      name: 'Emily Rodriguez',
      text: 'Miranda\'s design sense is impeccable. She took our dated kitchen and turned it into the heart of our home. We couldn\'t be happier!'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
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
            Client Stories
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from clients who have transformed their spaces with Miranda
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: window.innerWidth < 768 ? 0.2 : 0.6,
                delay: window.innerWidth < 768 ? 0 : index * 0.2,
                ease: "easeOut"
              }}
              className="bg-stone-50 p-8 h-full flex flex-col justify-between hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 font-light text-lg italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6 group-hover:border-green-200 transition-colors duration-300">
                <p className="font-medium text-gray-900 text-lg">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;