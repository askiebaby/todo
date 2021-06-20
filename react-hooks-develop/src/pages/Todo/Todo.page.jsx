import React from 'react';
import './Todo.page.scss';

import Header from '../../components/Header/Header.component';
import Tasks from '../../components/Tasks/Tasks.component';
import Footer from '../../components/Footer/Footer.component';

const TodoPage = () => {
  return (
    <div className='wrapper'>
      <div className='mainBody'>
        <Header />
        <Tasks />
        <Footer />
      </div>
    </div>
  );
};

export default TodoPage;
