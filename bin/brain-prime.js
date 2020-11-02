#!/usr/bin/env node
import {brain_prime} from "../src/brain-prime_module.js";
import promptly from "promptly";

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let playCount = parseInt(await promptly.prompt('How many times you want to play?:'));

while (playCount){
    let a = Math.floor(Math.random() * 90 + 10);
    console.log(`Question: ${a}`);
    let ans = brain_prime(a);
    const enteredValue = await promptly.prompt('Your answer: ');
    let correctAnswer;

    !ans ? correctAnswer = 'no' : correctAnswer = 'yes';

    if ((enteredValue === 'yes' && ans) || (enteredValue === 'no' && !ans)){
        console.log('Correct!');
    } else {
        console.log(`'${enteredValue}' is not correct answer. Correct answer is '${correctAnswer}'`);
    }

    playCount--;
}