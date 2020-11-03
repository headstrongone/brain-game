#!/usr/bin/env node
import promptly from 'promptly';
import { begin } from './bin/brain-games.js';

begin();

(async () => {
  const name = await promptly.prompt('Please tell me your name: ');
  console.log(`Welcome, ${name}!`);
})();
