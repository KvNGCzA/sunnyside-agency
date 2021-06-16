import { useCallback, useEffect, useState } from 'react';
import './index.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/icon-hamburger.svg';

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  const handleMenuOnResize = useCallback(() => {
    if (window.innerWidth >= 780 && showMenu) {
      setshowMenu(false);
    }
  }, [showMenu]);

  useEffect(() => {
    window.addEventListener('resize', handleMenuOnResize);

    return () => {
      window.removeEventListener('resize', handleMenuOnResize);
    };
  }, [handleMenuOnResize]);

  return (
    <header>
      <Logo fill='#FFF' />
      <ul id='desktop-menu'>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li className='header-text'>Contact</li>
      </ul>

      <Hamburger className='menu-icon' onClick={toggleMenu} />

      <div
        id='mobile-menu'
        style={{
          display: showMenu ? 'block' : 'none',
        }}
      >
        <div className='edge' />
        <ul>
          <li onClick={toggleMenu}>About</li>
          <li onClick={toggleMenu}>Services</li>
          <li onClick={toggleMenu}>Projects</li>
          <li className='header-text' onClick={toggleMenu}>
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
