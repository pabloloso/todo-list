import { v4 } from 'uuid';

export const updateCompleteFromElement = (todoList, id) => todoList.map((element) => {
  if (element.id === id) {
    return {
      ...element,
      complete: !element.complete,
    };
  }

  return { ...element };
});

export const updateTodoListWithNewElement = (todoList, text) => [
  ...todoList,
  {
    id: v4(),
    complete: false,
    text,
  },
];

export const deleteElementFromId = (todoList, id) => todoList.filter((element) => element.id !== id);
