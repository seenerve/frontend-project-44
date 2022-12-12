import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (rndNum1, rndNum2) => {
  if (rndNum2 === 0) {
    return rndNum1;
  }
  return getGcd(rndNum2, rndNum1 % rndNum2);
};

const getQuestionAndAnswer = () => {
  const firstMaxNumber = getRandomNumber(1, 100);
  const secondMaxNumber = getRandomNumber(1, 100);

  const question = `${firstMaxNumber} ${secondMaxNumber}`;

  const expectedAnswer = getGcd(firstMaxNumber, secondMaxNumber);

  return [question, String(expectedAnswer)];
};
const startGcdGame = () => {
  createGameLogic(description, getQuestionAndAnswer);
};
export default startGcdGame;
