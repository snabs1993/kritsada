// Loads Playwright from this folder's node_modules, or from a global install.
try { module.exports = require('playwright'); }
catch (e) { module.exports = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright'); }
