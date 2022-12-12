#!/usr/bin/env node
import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const inspectRandomNumber = getRandomNumber(2, 500);

  const expectedAnswer = isPrime(inspectRandomNumber) ? 'yes' : 'no';

  return [inspectRandomNumber, expectedAnswer];
};

const startPrimeGame = () => {
  createGameLogic(description, getQuestionAndAnswer);
};

export default startPrimeGame;
