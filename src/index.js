import two from './two.js';
import shared from './shared-re-exported.js';

console.log('"shared re-export" should be logged twice, once above this log line, once below');
shared();

export { shared as shared };
