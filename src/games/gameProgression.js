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
  const progressionLength = getRandomNumber(10, 20);
  const maxNumber = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 5);
  const progression = getProgression(maxNumber, progressionStep, progressionLength);
  const maxIndex = getRandomNumber(0, 10);

  const expectedAnswer = String(progression[maxIndex]);
  progression[maxIndex] = '..';
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

const startProgressionGame = () => {
  createGameLogic(description, getQuestionAndAnswer);
};
export default startProgressionGame;
