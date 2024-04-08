import { useContext } from 'react';
import { ThemeContext } from '../../../utils/context/themeContext';
import './themeToggler.scss';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggler">
      <input 
        type="checkbox" 
        id="theme-toggler-checkbox" 
        checked={theme === 'dark'} 
        onChange={toggleTheme} 
      />
      <label htmlFor="theme-toggler-checkbox" className="theme-toggler-label">
        <span className="theme-toggler-slider"></span>
      </label>
    </div>
  );
}

export default ThemeToggler;