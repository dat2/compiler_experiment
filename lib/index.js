import parse from './parser/';
import semantics from './semantics/';
import generate from './generation/';

export function compile(string) {
  return parse(string)
    .then(semantics)
    .then(generate);
}

// compile testing
compile('6 + PI * 5')
  .then(console.log)
  .catch(console.error);
