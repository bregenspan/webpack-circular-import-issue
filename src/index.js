import shared from './shared.js';
import two from './two.js';

console.log('"shared import" should be logged twice, once above this log line, once below');
shared();

export { shared };
