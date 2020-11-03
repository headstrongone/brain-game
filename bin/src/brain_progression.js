import rls from 'readline-sync';
import brain_progression_module from '../../src/brain_progression_module.js';
import welcome from './brain-games-welcome.js';

const brain_progression = () => {
  welcome();

  let playCount = rls.question('How many times do you want to play?:');
  let winCount = 0;
  const playEndCongrats = playCount;

  console.log('What number missing in this progression?');

  while (playCount) {
    const [questArray, answerValue] = brain_progression_module();

    process.stdout.write('Question: ');

    for (let i = 0; i < questArray.length; i++) {
      if (questArray[i] === null) {
        questArray[i] = '...';
      }
      process.stdout.write(`${questArray[i]}  `);
    }

    process.stdout.write('\n');

    const userAnswer = parseInt(rls.question('Your answer is: '), 10);

    if (userAnswer === answerValue) {
      console.log('Correct!');
      winCount++;
    } else {
      console.log(`'${userAnswer}' is not right answer. The correct answer is '${answerValue}'.`);
    }

    playCount--;
  }

  console.log(`You answered right ${winCount} of ${playEndCongrats}! Congratulations!`);
};

export default brain_progression;
