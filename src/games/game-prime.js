#!/usr/bin/env node
import getRandomRange from '../get-random-range.js';
import gameLogic from '../index.js';

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
  const num = getRandomRange(2, 500);

  const question = `${num}`;

  const expectedAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

const primeGame = () => {
  gameLogic(description, getQuestionAndAnswer);
};

export default primeGame;
