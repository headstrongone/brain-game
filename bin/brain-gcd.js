#!/usr/bin/env node
import {brain_gcd} from "../src/brain-gcd_module.js";
import promptly from "promptly";

let playCount = parseInt(await promptly.prompt('How many times you want to play?:'));

console.log('Find the greatest common divisor of given numbers');

while (playCount){
    let a = Math.floor(Math.random() * 90 + 10), b = Math.floor(Math.random() * 90 + 10);
    console.log(`Question: ${a} ${b}`);
    let ans = brain_gcd(a, b);
    const enteredValue = parseInt(await promptly.prompt('Your answer: '));
    if (ans === enteredValue){
        console.log('Correct!');
    } else {
        console.log(`'${enteredValue}' is not correct answer. Correct answer is '${ans}'`);
    }
    playCount--;
}