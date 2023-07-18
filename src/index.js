const core = require('@actions/core');

const person = core.getInput('person');

console.log(`Welcome ${person}! to v1.2.0`);
