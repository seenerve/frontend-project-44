#!/usr/bin/env node
import getRandomRange from '../get-random-range.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenLogic = () => {
  const question = getRandomRange(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
const evenGame = () => {
  gameLogic(description, evenLogic);
};
export default evenGame;
