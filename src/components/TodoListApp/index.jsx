import React, { useState } from 'react';

import TodoList from '../TodoList';

import { deleteElementFromId, updateCompleteFromElement, updateTodoListWithNewElement } from './logic';

function TodoListApp() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || []);

  const updateTodoList = (newTodoList) => {
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  const handleCompleteTodo = (id) => {
    updateTodoList(updateCompleteFromElement(todoList, id));
  };

  const handleDeleteTodo = (id) => {
    updateTodoList(deleteElementFromId(todoList, id));
  };

  const handleAddTodo = () => {
    const cleanText = text.trim();
    if (cleanText !== '') {
      updateTodoList(updateTodoListWithNewElement(todoList, cleanText));
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
