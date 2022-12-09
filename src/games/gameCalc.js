#!/usr/bin/env node

import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'What is the result of the expression?';
const marks = ['+', '-', '*'];

const calc = (firstValue, secondValue, mark) => {
  switch (mark) {
    case '+':
      return String(firstValue + secondValue);
    case '-':
      return String(firstValue - secondValue);
    case '*':
      return String(firstValue * secondValue);
    default:
      throw new Error(`operation ${mark} is not supported`);
  }
};

const calcLogic = () => {
  const firstValue = getRandomNumber(0, 100);
  const secondValue = getRandomNumber(0, 100);
  const mark = marks[getRandomNumber(0, marks.length - 1)];
  const answer = String(calc(firstValue, secondValue, mark));
  const question = `${firstValue} ${mark} ${secondValue}`;
  return [question, answer];
};

const startCalcGame = () => {
  createGameLogic(description, calcLogic);
};

export default startCalcGame;