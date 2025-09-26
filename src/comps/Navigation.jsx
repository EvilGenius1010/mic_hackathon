import React from 'react';

const Navigation = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-8 right-8 z-[1000] flex flex-col gap-3 md:top-4 md:right-4 md:gap-2">
      <a
        href="#home"
        onClick={(e) => scrollToSection(e, '#home')}
        className="text-white no-underline text-sm font-normal relative opacity-70 text-right transition-opacity duration-300 hover:opacity-100 group"
      >
        Home
        <span className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 w-0 h-px bg-[var(--accent-orange)] transition-all duration-300 group-hover:w-3"></span>
      </a>
      <a
        href="#initiatives"
        onClick={(e) => scrollToSection(e, '#initiatives')}
        className="text-white no-underline text-sm font-normal relative opacity-70 text-right transition-opacity duration-300 hover:opacity-100 group"
      >
        Initiatives
        <span className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 w-0 h-px bg-[var(--accent-orange)] transition-all duration-300 group-hover:w-3"></span>
      </a>
      <a
        href="#success"
        onClick={(e) => scrollToSection(e, '#success')}
        className="text-white no-underline text-sm font-normal relative opacity-70 text-right transition-opacity duration-300 hover:opacity-100 group"
      >
        Success
        <span className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 w-0 h-px bg-[var(--accent-orange)] transition-all duration-300 group-hover:w-3"></span>
      </a>
      <a
        href="#contact"
        onClick={(e) => scrollToSection(e, '#contact')}
        className="text-white no-underline text-sm font-normal relative opacity-70 text-right transition-opacity duration-300 hover:opacity-100 group"
      >
        Contact
        <span className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 w-0 h-px bg-[var(--accent-orange)] transition-all duration-300 group-hover:w-3"></span>
      </a>
    </nav>
  );
};

export default Navigation;