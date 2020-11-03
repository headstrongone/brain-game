#!/usr/bin/env node

import rls from 'readline-sync';
import brain_even from './bin/src/brain_even.js';
import brain_progression from './bin/src/brain_progression.js';
import brain_gcd from './bin/src/brain_gcd.js';
import brain_prime from './bin/src/brain_prime.js';

console.log('There are 5 games you can choose to play:');
console.log('1 -\t Find Prime Number');
console.log('2 -\t Find GCD of 2 Numbers');
console.log('3 -\t Find Missing Part Of Arithmetic Progression');
console.log('4 -\t Find Even Number');
console.log('====================');

const choose = rls.question('Type the number of game you want to play: ');

const choose1 = parseInt(choose, 10);
console.log('====================');
switch (choose1) {
  case 1:
    brain_prime();
    break;
  case 2:
    brain_gcd();
    break;
  case 3:
    brain_progression();
    break;
  case 4:
    brain_even();
    break;
  default:
    console.log('ERROR! Type number 1 - 4.');
    break;
}
