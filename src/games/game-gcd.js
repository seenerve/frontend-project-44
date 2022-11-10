import getRandomRange from '../get-random-range.js';
import gameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (rndNum1, rndNum2) => {
  for (let i = rndNum1; i > 0; i -= 1) {
    if (rndNum1 % i === 0 && rndNum2 % i === 0) {
      return String(i);
    }
  }
  return undefined;
};

const getQuestionAndAnswer = () => {
  const rndNum1 = getRandomRange(1, 100);
  const rndNum2 = getRandomRange(1, 100);

  const question = `${rndNum1} ${rndNum2}`;

  const expectedAnswer = getGcd(rndNum1, rndNum2);

  return [question, expectedAnswer];
};
const gcdGame = () => {
  gameLogic(description, getQuestionAndAnswer);
};
export default gcdGame;