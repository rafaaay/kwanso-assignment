import React from 'react';
import SearchField from '../../atoms/searchField';
import CTA from '../../atoms/CTA';

function Header() {
  return (
    <header className='header'>
      {/* left */}
      <div className='header__left'>
        <div className='logo'>
            <img src='https://picsum.photos/id/1/200' alt='XYZ logo' />
        </div>

        <nav className='header__nav'>
            <ul>
                <li>
                    <a href='#' aria-label="link to home screen">Home</a>
                </li>

                <li>
                    <a href='#' aria-label="link to articles page">My Articles</a>
                </li>
            </ul>
        </nav>
      </div>
      {/* left */}

      {/* right */}
      <div className='header__right'>
        <SearchField />
        <CTA />
        <div className='user-menu'>
            <img src='https://picsum.photos/id/1/200' alt='user image' aria-label="click to open the user dropdown" />
        </div> 
      </div>
      {/* right */}
    </header>
  );
}

export default Header;