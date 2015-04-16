import { parser } from './parser';

// wrap the result of parsing into a promise
export default function parse(input) {
  console.log('parser');
  return new Promise((resolve) => resolve(parser.parse(input)));
}
