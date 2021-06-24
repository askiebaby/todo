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
            <a href='/todo/vue-version'>Vue</a>
          </li>
          <li>
            <a href='/todo/react-hooks-version' className='active'>
              React Hooks
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
