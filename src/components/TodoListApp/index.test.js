import { deleteElementFromId } from './logic';

const todoList = [
  {
    id: 1,
    text: 'Pablo',
    complete: false,
  },
  {
    id: 2,
    text: 'Luis',
    complete: false,
  },
  {
    id: 3,
    text: 'Nicola',
    complete: false,
  },
];

describe('deleteElementFromId function', () => {
  test('mi test', () => {
    expect(deleteElementFromId(todoList, 1)).toStrictEqual([
      {
        id: 2,
        text: 'Luis',
        complete: false,
      },
      {
        id: 3,
        text: 'Nicola',
        complete: false,
      },
    ]);
  });
});
