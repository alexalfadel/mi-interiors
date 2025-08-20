import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail } from 'lucide-react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const Contact = () => {
  const [ref, inView] = useInView(0.1, '0px 0px -20%');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [name]: formattedPhone }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = true;
    if (!formData.phone.trim() || !/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) newErrors.phone = true;
    if (!formData.message.trim()) newErrors.message = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setIsSubmitted(true);
      
      // Reset form after success animation
      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 1500);
    }
  };

  // Reset form errors when scrolling away from contact section
  React.useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isInView && Object.keys(errors).length > 0) {
          // Reset errors for empty fields
          const newErrors: Record<string, boolean> = {};
          Object.keys(errors).forEach(key => {
            if (formData[key as keyof typeof formData].trim() !== '') {
              newErrors[key] = errors[key];
            }
          });
          setErrors(newErrors);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [errors, formData]);
  return (
    <section id="contact" className="py-24 bg-stone-50">
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
            Start Your Design Journey
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your vision and bring it to life
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: window.innerWidth < 768 ? 0.2 : 0.8,
              ease: "easeOut"
            }}
            className="bg-white p-8 shadow-lg h-fit"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-0 border-b-2 bg-transparent focus:outline-none transition-colors duration-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-200 focus:border-green-700'
                  }`}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-0 border-b-2 bg-transparent focus:outline-none transition-colors duration-300 ${
                    errors.email ? 'border-red-500' : 'border-gray-200 focus:border-green-700'
                  }`}
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-0 border-b-2 bg-transparent focus:outline-none transition-colors duration-300 ${
                    errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-green-700'
                  }`}
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 border-0 border-b-2 bg-transparent focus:outline-none resize-none transition-colors duration-300 ${
                    errors.message ? 'border-red-500' : 'border-gray-200 focus:border-green-700'
                  }`}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-700 text-white py-4 px-8 font-medium hover:bg-green-800 transition-all duration-300 hover:scale-105 disabled:opacity-75"
              >
                <span className={`transition-opacity duration-300 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
                  Send Message
                </span>
                <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isSubmitted ? 'opacity-100' : 'opacity-0'}`}>
                  Thank you!
                </span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: window.innerWidth < 768 ? 0.25 : 0.8,
              delay: window.innerWidth < 768 ? 0 : 0.2,
              ease: "easeOut"
            }}
            className="space-y-8"
          >
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer hover:text-green-700 transition-colors duration-300">
                  <MapPin size={24} className="text-green-700 flex-shrink-0" />
                  <div onClick={() => window.open('https://maps.google.com/?q=547+SW+Main+St,+Portland,+OR+97204', '_blank')}>
                    <p className="font-medium text-gray-900">Studio Location</p>
                    <p className="text-gray-600 group-hover:text-green-600 transition-colors duration-300">547 SW Main St, Portland, OR 97204</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer hover:text-green-700 transition-colors duration-300">
                  <Phone size={24} className="text-green-700 flex-shrink-0" />
                  <div onClick={() => window.location.href = 'tel:+16504651676'}>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600 group-hover:text-green-600 transition-colors duration-300">(650) 465-1676</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer hover:text-green-700 transition-colors duration-300">
                  <Mail size={24} className="text-green-700 flex-shrink-0" />
                  <div onClick={() => window.location.href = 'mailto:hello@miinteriors.com'}>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 group-hover:text-green-600 transition-colors duration-300">hello@miinteriors.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="bg-gray-200 h-64 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Google Maps Integration</p>
                <p className="text-sm text-gray-400">Portland Design District</p>
              </div>
            </div> */}
            <div className="relative shadow-lg rounded overflow-hidden">
  <iframe
    title="Studio Location"
    src="https://www.google.com/maps?q=547+SW+Main+St,+Portland,+OR+97205&output=embed"
    className="w-full h-64 border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  <a
    href="https://maps.google.com/?q=547+SW+Main+St,+Portland,+OR+97204"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 text-sm rounded shadow hover:bg-white transition"
  >
    Open in Google Maps
  </a>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;