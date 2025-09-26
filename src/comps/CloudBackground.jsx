import React, { useEffect, useRef } from 'react';

const CloudBackground = () => {
  const cloudsContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const clouds = document.querySelectorAll('.cloud');
      
      clouds.forEach(cloud => {
        const cloudRect = cloud.getBoundingClientRect();
        const cloudCenterX = cloudRect.left + cloudRect.width / 2;
        const cloudCenterY = cloudRect.top + cloudRect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(mouseX - cloudCenterX, 2) + 
          Math.pow(mouseY - cloudCenterY, 2)
        );
        
        // If cursor is close to cloud, make it glow
        if (distance < 300) {
          const intensity = 1 - (distance / 300);
          const scale = 1 + (intensity * 0.2);
          const brightness = 0.4 + (intensity * 0.6);
          
          cloud.style.transform = `scale(${scale})`;
          cloud.style.opacity = brightness;
          cloud.style.filter = `blur(${40 - (intensity * 20)}px)`;
          
          // Add orange glow for some clouds
          if (cloud.classList.contains('cloud-2') || cloud.classList.contains('cloud-4')) {
            cloud.style.background = `radial-gradient(circle, rgba(255, 85, 0, ${0.1 + (intensity * 0.3)}) 0%, transparent 70%)`;
          } else {
            cloud.style.background = `radial-gradient(circle, rgba(255, 255, 255, ${0.1 + (intensity * 0.3)}) 0%, transparent 70%)`;
          }
        } else {
          // Reset to default
          cloud.style.transform = 'scale(1)';
          cloud.style.opacity = '0.4';
          cloud.style.filter = 'blur(40px)';
          
          if (cloud.classList.contains('cloud-2') || cloud.classList.contains('cloud-4')) {
            cloud.style.background = 'radial-gradient(circle, rgba(255, 85, 0, 0.1) 0%, transparent 70%)';
          } else {
            cloud.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)';
          }
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cloudsContainerRef} className="clouds-container">
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>
      <div className="cloud cloud-5"></div>
    </div>
  );
};

export default CloudBackground;