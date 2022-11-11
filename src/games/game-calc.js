#!/usr/bin/env node

import getRandomRange from '../get-random-range.js';
import gameLogic from '../index.js';

const description = 'What is the result of the expression?';
const calc = (firstValue, secondValue, mark) => {
  let result = 0;

  switch (mark) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
      result = null;
  }
  return String(result);
};

const calcLogic = () => {
  const marks = ['+', '-', '*'];
  const firstValue = getRandomRange(0, 100);
  const secondValue = getRandomRange(0, 100);
  const mark = marks[getRandomRange(0, 2)];
  const answer = String(calc(firstValue, secondValue, mark));
  const question = `${firstValue} ${mark} ${secondValue}`;
  return [question, answer];
};

const calcGame = () => {
  gameLogic(description, calcLogic);
};

export default calcGame;
