// Lightweight safety checks for the catalog source.
// This file does not modify collection data or the app.
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const required = [
  "const KEY='lewis-private-collections-v8'",
  'localStorage.setItem(KEY,JSON.stringify(items))',
  'function cycle(v)',
  'function render()',
  'function reset()',
  'exportBtn',
  'importBtn',
  'categoryFilter',
  'compositionFilter',
  'saveBtn',
  'clearBtn'
];
const missing = required.filter(x => !html.includes(x));
if (missing.length) {
  console.error('Catalog smoke test failed. Missing:', missing);
  process.exit(1);
}
if (!html.includes("v===1?'✅ Yes':v===2?'❌ No':'❓ Unknown / Not Checked'")) {
  console.error('Catalog smoke test failed: three-state cycle is missing or changed.');
  process.exit(1);
}
console.log('Catalog smoke test passed: core storage, add/edit/reset, filters, backup controls, and three-state field logic are present.');
