import React, { useState, useEffect } from 'react';
import '../css/LoadingAnimation.css';

const LoadingAnimation = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(true);
  const [colorTransition, setColorTransition] = useState(false);
  const [whiteText, setWhiteText] = useState(false);

  useEffect(() => {
    const text1 = "Innovate. Create. Lead.";
    const text2 = "MAHE Innovation Cell";
    let index = 0;
    let currentText = "";
    let phase = 1;

    const type = () => {
      if (phase === 1) {
        // Typing first text with adjusted speed
        if (index < text1.length) {
          currentText += text1.charAt(index);
          setText(currentText);
          index++;
          setTimeout(type, 80); // Adjusted from 60ms to 80ms
        } else {
          // Wait before clearing
          setTimeout(() => {
            phase = 2;
            type();
          }, 1500); // Adjusted pause to 1.5 seconds
        }
      } else if (phase === 2) {
        // Clear text immediately
        setText("");
        currentText = "";
        index = 0;

        // Wait before typing second text
        setTimeout(() => {
          phase = 3;
          type();
        }, 500);
      } else if (phase === 3) {
        // Typing second text with adjusted speed
        if (index < text2.length) {
          currentText += text2.charAt(index);
          setText(currentText);
          index++;
          setTimeout(type, 60); // Adjusted from 40ms to 60ms
        } else {
          // Animation complete - trigger color transition
          setColorTransition(true);

          // After the reveal animation completes, change text color to white
          setTimeout(() => {
            setWhiteText(true);
            // Wait a bit more, then fade out and complete
            setTimeout(() => {
              setVisible(false);
              setTimeout(() => {
                onComplete();
              }, 1000);
            }, 1000);
          }, 1500); // Matches the duration of the reveal animation
        }
      }
    };

    type();
  }, [onComplete]);

  return (
    <div className={`loading-container ${!visible ? 'fade-out' : ''}`}>
      <div className="glow"></div>
      <div className="bg-element bg-element-1"></div>
      <div className="bg-element bg-element-2"></div>
      <div className="intro-container">
        <div className="typing-container">
          <div className={`typing-text ${colorTransition ? 'color-transition' : ''
            } ${whiteText ? 'white-text' : ''
            }`}>
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
