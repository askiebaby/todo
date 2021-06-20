import React from 'react';
import './Header.component.scss';
const Header = () => {
  return (
    <header className='globalHeader'>
      <nav>
        <ul>
          <li>
            <a href='/todo/js-version'>Vanilla</a>
          </li>
          <li>
            <a href='/todo/jq-version'>JQuery</a>
          </li>
          <li>
            <a href='/todo/vue'>Vue</a>
          </li>
          <li>
            <a href='/todo/react' className='active'>
              React
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
