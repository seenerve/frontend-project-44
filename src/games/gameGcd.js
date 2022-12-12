import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;
const getGcd = (rndNum1, rndNum2) => {
  if (rndNum2 === 0) {
    return rndNum1;
  }
  return getGcd(rndNum2, rndNum1 % rndNum2);
};

const getQuestionAndAnswer = () => {
  const firstValue = getRandomNumber(minNumber, maxNumber);
  const secondValue = getRandomNumber(minNumber, maxNumber);

  const question = `${firstValue} ${secondValue}`;

  const expectedAnswer = getGcd(firstValue, secondValue);

  return [question, String(expectedAnswer)];
};
const startGcdGame = () => {
  createGameLogic(description, getQuestionAndAnswer);
};
export default startGcdGame;
