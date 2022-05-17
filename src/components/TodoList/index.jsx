import React from 'react';
import PropTypes from 'prop-types';

import StyledText from './styles';

function TodoList({ todoList, handleCompleteTodo, handleDeleteTodo }) {
  return (
    <>
      {todoList.map((element) => (
        <div key={element.id}>
          <StyledText isCompleted={element.complete}>{element.text}</StyledText>
          <button onClick={() => handleCompleteTodo(element.id)} type="button">Complete</button>
          <button onClick={() => handleDeleteTodo(element.id)} type="button">Delete</button>
        </div>
      ))}
    </>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
