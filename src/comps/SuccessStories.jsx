import React, { useEffect, useRef } from 'react';

const SuccessStories = () => {
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
          }, index * 150);
        }
      });
    }, observerOptions);

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const successStories = [
    {
      title: 'MedTech Innovations',
      description: 'Low-cost diagnostic device for rural healthcare'
    },
    {
      title: 'EcoSolutions',
      description: 'Biodegradable packaging reducing plastic waste'
    },
    {
      title: 'EdTech Platform',
      description: 'AI-powered learning tool for academic performance'
    },
    {
      title: 'HealthConnect',
      description: 'Telemedicine platform for rural patients'
    },
    {
      title: 'AgriTech Solutions',
      description: 'Smart irrigation system for water conservation'
    },
    {
      title: 'Cultural Heritage Project',
      description: 'Digitization of rare manuscripts and artifacts'
    }
  ];

  return (
    <section id="success" className="py-20">
      <div className="w-[90%] max-w-6xl mx-auto py-8">
        <h2>Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {successStories.map((story, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="relative opacity-0 translate-y-5 before:content-[''] before:absolute before:top-[-1rem] before:left-0 before:w-8 before:h-0.5 before:bg-[var(--accent-orange)]"
            >
              <h3 className="text-[1.8rem] mb-2">{story.title}</h3>
              <p className="opacity-70">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;