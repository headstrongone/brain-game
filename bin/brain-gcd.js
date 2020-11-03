#!/usr/bin/env node
import rls from 'readline-sync';
import brain_gcd from '../src/brain-gcd_module.js';
import welcome from './brain-games-welcome.js';

welcome();

console.log('Find the greatest common divisor of given numbers');

let playCount = rls.question('How many times you want to play?: ');
let winCount = 0;
const playEndCongrats = playCount;

while (playCount) {
  const a = Math.floor(Math.random() * 90 + 10); const
    b = Math.floor(Math.random() * 90 + 10);
  console.log(`Question: ${a} ${b}`);
  const ans = brain_gcd(a, b);

  const enteredValue = rls.question('Your answer: ');

  if (ans === enteredValue) {
    console.log('Correct!');
    winCount++;
  } else {
    console.log(`'${enteredValue}' is not correct answer. Correct answer is '${ans}'`);
  }
  playCount--;
}

console.log(`You answered right ${winCount} of ${playEndCongrats}! Congratulations!`);
