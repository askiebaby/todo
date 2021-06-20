import React from 'react';
import './Footer.component.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <section className='copyRight'>
        Copyright &copy; 2019 Askie Lin All rights reserved.
      </section>
      <a
        href='https://github.com/askiebaby/todo'
        target='_blank'
        rel='noreferrer'>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
    </footer>
  );
};

export default Footer;
