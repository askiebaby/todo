import React from 'react';
import './CreateSection.component.scss';

const CreateSection = () => {
  return (
    <section className='create'>
      <h2>
        待辦事項
        <span
          className='msgBox' //ref='msgBox'
        />
      </h2>
      <input
        type='text'
        placeholder='例如：倒垃圾'
        className='addInput'
        autoFocus
        // ref='addInput'
        // onKeyup='createTodo'
      />
      <input
        type='submit'
        className='task__button task__submit'
        value='新增'
        // onClick='createTodo'
      />
    </section>
  );
};

export default CreateSection;
