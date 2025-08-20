import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Miranda Irwin Interiors - Timeless Interior Design in Portland",
  description = "Transform your space with Miranda Irwin's expert interior design services. Specializing in residential design, space planning, and creating beautiful, functional homes in Portland, Oregon.",
  keywords = "interior design, Portland interior designer, residential design, home design, space planning, interior decorator, Miranda Irwin, luxury interiors, modern design, timeless design",
  image = "/src/assets/hero.png",
  url = "https://mirandairwininteriors.com",
  type = "website",
  author = "Miranda Irwin",
  publishedTime,
  modifiedTime
}) => {
  const siteTitle = "Miranda Irwin Interiors";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@mirandairwininteriors" />
      
      {/* Article Meta Tags (if applicable) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://maps.googleapis.com" />
      
      {/* Structured Data - Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InteriorDesigner",
          "name": "Miranda Irwin Interiors",
          "description": description,
          "url": url,
          "logo": `${url}/logo.png`,
          "image": image,
          "founder": {
            "@type": "Person",
            "name": "Miranda Irwin",
            "jobTitle": "Interior Designer"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "547 SW Main St",
            "addressLocality": "Portland",
            "addressRegion": "OR",
            "postalCode": "97204",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-650-465-1676",
            "contactType": "customer service",
            "email": "hello@miinteriors.com"
          },
          "sameAs": [
            "https://instagram.com/xelaweb",
            "https://pinterest.com/",
            "https://linkedin.com/in/alexandraalfadel"
          ],
          "serviceArea": {
            "@type": "Place",
            "name": "Portland, Oregon"
          },
          "priceRange": "$$$$",
          "openingHours": "Mo-Fr 09:00-17:00"
        })}
      </script>
      
      {/* Structured Data - Professional Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Miranda Irwin Interiors",
          "description": "Professional interior design services specializing in residential spaces, full home design, space planning, and luxury interiors.",
          "serviceType": "Interior Design",
          "provider": {
            "@type": "Person",
            "name": "Miranda Irwin"
          },
          "areaServed": "Portland, Oregon",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Interior Design Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full Home Design",
                  "description": "Complete interior design services from concept to completion"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Space Planning",
                  "description": "Thoughtful layout design that maximizes functionality"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Color Consultation",
                  "description": "Expert color selection and palette development"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;