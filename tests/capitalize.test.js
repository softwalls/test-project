import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('функция работает неправильно');
}

if (capitalize('') !== '') {
  throw new Error('функция работает неправильно');
}
 console.log('Всё ОК!');