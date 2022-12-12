#!/usr/bin/env node
import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const evenLogic = () => {
  const maxNumber = getRandomNumber(1, 100);
  const answer = isEven(maxNumber) ? 'yes' : 'no';
  return [maxNumber, answer];
};
const startEvenGame = () => {
  createGameLogic(description, evenLogic);
};
export default startEvenGame;
