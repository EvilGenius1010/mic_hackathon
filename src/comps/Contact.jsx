import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [showDetails, setShowDetails] = useState(false);
  const contactEmailRef = useRef(null);
  const socialLinksRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowDetails(true);
          }, 500);
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleArrowClick = () => {
    setShowDetails(true);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center text-center py-20 relative"
    >
      <div className="w-[90%] max-w-6xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3rem)] mb-8">No idea is a bad idea, Reach us!</h2>
        <div 
          className="text-5xl text-white opacity-70 cursor-pointer transition-all duration-300 animate-bounce hover:opacity-100 hover:text-[var(--accent-orange)]"
          onClick={handleArrowClick}
        >
          ↓
        </div>
        <a
          href="mailto:hey@mic.edu"
          ref={contactEmailRef}
          className={`block text-[clamp(1.5rem,4vw,2.5rem)] text-white no-underline mt-8 relative transition-all duration-500 transform hover:text-[var(--accent-orange)] group ${
            showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          hey@mic.edu
          <span className="absolute bottom-[-10px] left-0 w-0 h-px bg-[var(--accent-orange)] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      
      {/* Social Links - Bottom Right of Contact Section */}
      <div 
        ref={socialLinksRef}
        className={`absolute bottom-8 right-8 flex flex-col gap-4 transition-all duration-500 delay-200 transform md:bottom-4 md:right-4 ${
          showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <a
          href="https://instagram.com/mic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white no-underline opacity-70 text-right relative transition-all duration-300 hover:opacity-100 hover:text-[var(--accent-orange)] group"
        >
          Instagram
          <span className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 w-0 h-px bg-[var(--accent-orange)] transition-all duration-300 group-hover:w-3"></span>
        </a>
        <a
          href="https://linkedin.com/company/mic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white no-underline opacity-70 text-right relative transition-all duration-300 hover:opacity-100 hover:text-[var(--accent-orange)] group"
        >
          LinkedIn
          <span className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 w-0 h-px bg-[var(--accent-orange)] transition-all duration-300 group-hover:w-3"></span>
        </a>
      </div>
    </section>
  );
};

export default Contact;