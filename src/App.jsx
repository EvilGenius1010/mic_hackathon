import React, { useEffect } from 'react';
import CustomCursor from './comps/CustomCursor';
import CloudBackground from './comps/CloudBackground';
import Navigation from './comps/Navigation';
import Hero from './comps/Hero';
import Initiatives from './comps/Initiatives';
import SuccessStories from './comps/SuccessStories';
import Contact from './comps/Contact';
import Footer from './comps/Footer';

function App() {
  useEffect(() => {
    // Staggered animation for sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    // Add floating animation to abstract circles
    const style = document.createElement('style');
    style.textContent = `
      .abstract-circle {
        animation: rotate 30s linear infinite, float 6s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Cloud Background */}
      <CloudBackground />

      {/* Vertical Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Initiatives Section */}
      <Initiatives />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
