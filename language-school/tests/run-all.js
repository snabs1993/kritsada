// Runs every *.test.js in this folder and prints the lines that report errors or scores.
// Usage: node tests/run-all.js   (a test passes when it prints "errors: []")
const { execFileSync } = require('child_process'), fs = require('fs'), path = require('path');
let bad = 0;
for (const f of fs.readdirSync(__dirname).filter(f => f.endsWith('.test.js')).sort()) {
  let out = '';
  try { out = execFileSync(process.execPath, [path.join(__dirname, f)], { encoding: 'utf8', timeout: 600000 }); }
  catch (e) { out = (e.stdout || '') + (e.stderr || ''); bad++; }
  const lines = out.split('\n').filter(l => /error/i.test(l));
  if (f === 'exams.test.js') {
    const full = out.split('\n').filter(l => /items \d+/.test(l)), fails = full.filter(l => !/495\/495|9\.0Band/.test(l));
    console.log(`${f}: ${full.length - fails.length}/${full.length} sections at full marks`); fails.forEach(l => console.log('  FAIL ' + l)); if (fails.length) bad++;
  }
  lines.forEach(l => { console.log(`${f}: ${l.trim()}`); if (!/errors?:? \[\]$/.test(l.trim()) && !/no errors/.test(l)) bad++; });
}
console.log(bad ? `\n${bad} problem(s) found` : '\nALL TESTS PASSED'); process.exit(bad ? 1 : 0);
