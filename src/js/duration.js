const timeNow = document.getElementById('duration-now');
const timeTotal = document.getElementById('total-duration');
import { video } from './constans.js';

const timeModify = seconds => {
  let date = new Date(null);
  date.setSeconds(seconds);
  let result = date.toISOString().slice(14, 19);
  timeTotal.textContent = result;
};

const timeCurrent = current => {
  let date = new Date(null);
  date.setSeconds(current);
  let result = date.toISOString().slice(14, 19);
  timeNow.textContent = result;
};

export { timeModify, timeCurrent };
