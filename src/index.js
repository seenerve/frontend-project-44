import readlineSync from 'readline-sync';

const gameLogic = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, expectedAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameLogic;
