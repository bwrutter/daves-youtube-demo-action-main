const core = require('@actions/core');

const person = core.getInput('person');

console.log(`Welcome ${person}! to Sei lá qual versão`);
