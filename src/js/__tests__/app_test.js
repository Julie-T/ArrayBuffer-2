import ArrayBufferConverter from '../app';

// test('Загрузка данных', () => {
//   const arrayBufferConverter = new ArrayBufferConverter();
//   expect(arrayBufferConverter.load()).toBe();
// });

test('Преобразование данных', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load();
  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1"name":"Hitman""level":10}}}');
});
