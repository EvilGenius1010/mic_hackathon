import React, { useEffect, useRef } from 'react';

const Initiatives = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-[slideUp_0.6s_ease_forwards]');
          }, index * 100);
        }
      });
    }, observerOptions);

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="initiatives" className="py-20">
      <div className="w-[90%] max-w-6xl mx-auto py-8">
        <h2></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Removed all text content */}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;