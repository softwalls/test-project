import { strict as assert} from 'assert';
import capitalize from '../src/capitalize.js';

assert (capitalize('hello') === 'Hello');

assert (capitalize('') === '');

console.log('Всё ОК!');
