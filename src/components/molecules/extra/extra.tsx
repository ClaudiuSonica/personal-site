import './extra.scss';
import ThemeToggler from '../../atoms/themeToggler/themeToggler';
import { useState, useEffect, useRef } from 'react';
import arrow from '../../../../public/assets/arrow.svg';

const Extra = () => {

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

  return (
    <div className={`extra ${isOpen ? 'open' : ''}`} ref={ref}>
      <div className="extra-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </div>
      {isOpen && (
        <div className="extra-menu">
          <div className="menu-item">
            <ThemeToggler />
          </div>
          <div className="menu-item">
            <a href="#home">
              <img src={arrow} alt="Go to top" />
            </a>
          </div>
          <div className="menu-item">
            <a href="/path/to/your/cv.pdf" download>
              <span>CV</span>
              <img src={arrow} alt="download" style={{transform: "rotate(180deg)"}} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Extra;