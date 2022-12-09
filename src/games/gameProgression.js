#!/usr/bin/env node
import getRandomNumber from '../getRandomNumber.js';
import createGameLogic from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumOfProg, stepOfProg, lengthOfProg) => {
  const arr = [firstNumOfProg];

  for (let i = 0; arr.length <= lengthOfProg; i += 1) {
    arr.push(arr[i] + stepOfProg);
  }

  return arr;
};

const getQuestionAndAnswer = () => {
  const lengthOfProg = getRandomNumber(10, 20);
  const firstNumOfProg = getRandomNumber(1, 10);
  const stepOfProg = getRandomNumber(1, 5);
  const progression = getProgression(firstNumOfProg, stepOfProg, lengthOfProg);
  const indexForDots = getRandomNumber(0, 10);

  const expectedAnswer = String(progression[indexForDots]);
  progression[indexForDots] = '..';
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

const startProgressionGame = () => {
  createGameLogic(description, getQuestionAndAnswer);
};
export default startProgressionGame;
