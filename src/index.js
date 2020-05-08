import two from './two.js';

export function shared() {
  console.log('shared');
}

console.log('"shared re-export" should be logged twice, once above this log line, once below');
shared();
