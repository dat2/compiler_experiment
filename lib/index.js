import parse from './parser/';
import semantics from './semantics/';
import generate from './generation/';

export function compile(string) {
  return Promise.resolve(string)
    .then(parse)
    .then(semantics)
    .then(generate);
}

// compile testing
compile('6 + PI * 3')
  .then(console.log)
  .catch(console.error);
