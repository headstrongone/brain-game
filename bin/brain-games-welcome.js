import rls from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = rls.question('Please tell me your name: ');
  console.log(`Welcome, ${name}!`);
};

export default welcome;
