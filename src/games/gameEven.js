#!/usr/bin/env node
import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 50;
const isEven = (number) => number % 2 === 0;

const evenLogic = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const answer = isEven(maxNumber) ? 'yes' : 'no';
  return [question, answer];
};
const startEvenGame = () => {
  createGameLogic(description, evenLogic);
};
export default startEvenGame;
