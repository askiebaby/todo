import React, { useState, useEffect } from 'react';
import './CreateSection.component.scss';

const CreateSection = ({ handleCreateTodo }) => {
  const [todo, setTodo] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message && todo) {
      setMessage('');
    }
  }, [message, todo]);

  const handleSubmitNewTodo = (e, newTodo) => {
    e.preventDefault();

    if (!newTodo) {
      setMessage('你沒輸入內容...!!!!');
      return;
    }

    handleCreateTodo(e, newTodo);
    setTodo('');
  };

  return (
    <section className='create'>
      <h2>
        待辦事項
        {message ? <span className='msgBox'>{message}</span> : null}
      </h2>
      <form onSubmit={(e) => handleSubmitNewTodo(e, todo)}>
        <input
          type='text'
          placeholder='例如：倒垃圾'
          className='addInput'
          autoFocus
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          type='submit'
          className='task__button task__submit'
          value='新增'
        />
      </form>
    </section>
  );
};

export default CreateSection;
