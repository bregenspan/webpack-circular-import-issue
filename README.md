This repo shows an issue with Webpack and a circular import structure, in which:

- An entrypoint (src/index.js):
   - re-exports an import (as named export called "shared")
   - imports from two.js
- A dependency of the entrypoint (two.js):
   - imports the re-export from src/index.js noted above

## Setup

Run:
 * `npm install`
 * `npm run start`

To see an example of Rollup (working), native browser ES module support (working in Chrome), and the Webpack case (currently breaks)
