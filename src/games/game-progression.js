#!/usr/bin/env node
import getRandomRange from '../get-random-range.js';
import gameLogic from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const lengthOfProg = getRandomRange(10, 20);
  const firstNumOfProg = getRandomRange(1, 10);
  const stepOfProg = getRandomRange(1, 5);

  const arr = [firstNumOfProg];

  for (let i = 0; arr.length <= lengthOfProg; i += 1) {
    arr.push(arr[i] + stepOfProg);
  }

  return arr;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const indexForDots = getRandomRange(0, 10);

  const expectedAnswer = String(progression[indexForDots]);
  progression[indexForDots] = '..';
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

const progressionGame = () => {
  gameLogic(description, getQuestionAndAnswer);
};
export default progressionGame;
