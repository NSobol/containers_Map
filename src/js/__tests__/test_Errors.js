import ErrorRepository from '../Errors';

test('Ошибка найдена', () => {
  const expected = 'Bad Request — сервер обнаружил в запросе клиента синтаксическую ошибку.';
  const errors = new ErrorRepository();
  expect(errors.translate(400)).toBe(expected);
});

test('Ошибка не найдена', () => {
  const expected = 'Unknown error';
  const errors = new ErrorRepository();
  expect(errors.translate(300)).toBe(expected);
});