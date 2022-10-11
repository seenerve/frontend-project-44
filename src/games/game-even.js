#!/usr/bin/env node
import getRandomRange from '../get-random-range';
import gameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = () => {
  const question = getRandomRange(1, 100);
  const expectedAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, expectedAnswer];
}
const evenGame = () => {
  gameLogic(description, game);
}
export default evenGame;