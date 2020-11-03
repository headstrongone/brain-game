#!/usr/bin/env node

import rls from 'readline-sync';
import start_even from "./bin/brain-even.js";
import progression_start from "./bin/brain-progression.js";
import gcd_start from "./bin/brain-gcd.js";
import prime_start from "./bin/brain-prime.js";

console.log('There are 5 games you can choose to play:');
console.log('1 -\t Find Prime Number');
console.log('2 -\t Find GCD of 2 Numbers');
console.log('3 -\t Find Missing Part Of Arithmetic Progression');
console.log('4 -\t Find Even Number');
console.log();

let choose = rls.question('Type the number of game you want to play: ');

const choose1 = parseInt(choose);

console.log(typeof choose1);
switch (choose1) {
    case 1:
        start_even();
        break;
    case 2:
        gcd_start();
        break;
    case 3:
        progression_start();
        break;
    case 4:
        prime_start();
        break;
    default:
        console.log('ERROR! Type number 1 - 4.');
        break;
}