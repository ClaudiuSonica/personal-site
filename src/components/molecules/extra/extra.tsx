import './extra.scss';
import ThemeToggler from '../../atoms/themeToggler/themeToggler';
import { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../../utils/context/themeContext';
import cv from '../../../../public/cv/cv.pdf';

const Extra = () => {
  const { theme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const capitalizedTheme = theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <div className={`extra ${isOpen ? 'open' : ''}`} ref={ref}>
      <div className={`extra-toggle ${theme}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'x' : '+'}
      </div>
      {isOpen && (
        <div className={`extra-menu ${theme}`}>
          <div className="menu-item">
            <span>{capitalizedTheme} theme</span>
            <ThemeToggler />
          </div>
          <div className="menu-item">
            <a href="#home">Home</a>
          </div>
          <div className="menu-item">
            <a href={cv} download>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Extra;
