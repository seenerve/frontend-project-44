#!/usr/bin/env node
import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 2;
const maxNumber = 500;
const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(minNumber, maxNumber);

  const expectedAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

const startPrimeGame = () => {
  createGameLogic(description, getQuestionAndAnswer);
};

export default startPrimeGame;
