const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

// The collection card must not expose permanent deletion directly.
assert.ok(!html.includes('data-delete="${i}"'), 'Delete must not be exposed on collection cards.');

// The opened/editing record must contain the deletion control.
assert.ok(html.includes('id="deleteBtn"'), 'Opened record must provide a Delete control.');

// Deletion must require explicit confirmation.
assert.ok(html.includes("confirm('Delete this item?')"), 'Delete must require confirmation.');

console.log('Delete behavior checks passed.');
