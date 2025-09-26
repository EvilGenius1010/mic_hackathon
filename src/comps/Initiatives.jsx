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

  const initiatives = [
    'Innovation Incubator',
    'Research Commercialization',
    'Cross-Disciplinary Labs',
    'Innovation Challenges',
    'Industry Partnerships',
    'Community Outreach'
  ];

  return (
    <section id="initiatives" className="py-20">
      <div className="w-[90%] max-w-6xl mx-auto py-8">
        <h2>Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="text-2xl font-medium relative pl-6 transition-colors duration-300 opacity-0 translate-y-5 hover:text-[var(--accent-orange)] group"
            >
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-px bg-[var(--accent-orange)] transition-all duration-300 group-hover:w-4"></span>
              {initiative}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;