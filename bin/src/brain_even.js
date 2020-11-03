import rls from 'readline-sync';
import brain_even_module from '../../src/brain_even_module.js';
import welcome from './brain-games-welcome.js';

const brain_even = () => {
  welcome();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let playCount = rls.question('How many times do you want to play?: ');
  let winCount = 0;
  const playEndCongrats = playCount;

  while (playCount) {
    const a = Math.floor(Math.random() * 90 + 10);
    console.log(`Question: ${a}`);
    const ans = brain_even_module(a);

    const enteredValue = rls.question('Your answer: ');
    let correctAnswer;

    if (ans) {
      correctAnswer = 'no';
    } else {
      correctAnswer = 'yes';
    }

    if ((enteredValue === 'yes' && !ans) || (enteredValue === 'no' && ans)) {
      console.log('Correct!');
      winCount++;
    } else {
      console.log(`'${enteredValue}' is not correct answer. Correct answer is '${correctAnswer}'`);
    }
    playCount--;
  }

  console.log(`You answered right ${winCount} of ${playEndCongrats}! Congratulations!`);
};

export default brain_even;
