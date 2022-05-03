import React, { useState } from 'react';

import TodoList from '../TodoList';

import { deleteElementFromId, updateCompleteFromElement } from './logic';

function TodoListApp() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleCompleteTodo = (id) => {
    setTodoList(updateCompleteFromElement(todoList, id));
  };

  const handleDeleteTodo = (id) => {
    setTodoList(deleteElementFromId(todoList, id));
  };

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      setTodoList(updateTodoListWithNewElement(todoList, text));
    }

    setText('');
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Todo list app</h1>
      <input value={text} onChange={handleTextChange} />
      <button type="button" onClick={handleAddTodo}>Add</button>
      <TodoList
        todoList={todoList}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default TodoListApp;