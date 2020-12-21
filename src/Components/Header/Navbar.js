import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CINEHOME
            <i class="fas fa-play"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Popular' className='nav-links' onClick={closeMobileMenu}>
                Popular
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/NewReleases'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                New Releases
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Dramas'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dramas
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/MovieLink'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Movie Link
              </Link>
            </li>
          </ul>
          {button}
        </div>
      </nav>
    </>
  );
}

export default Navbar;