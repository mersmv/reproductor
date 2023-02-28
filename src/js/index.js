import '../scss/styles.scss';
//import { loquesea } from './dondesea.js';
//import Image fron '../assets/images/image.jpg;
import volumeHigh from '../assets/images/volume-high-solid.svg';
import volumeLow from '../assets/images/volume-xmark-solid.svg';
import { video } from './constans.js';
import { timeModify, timeCurrent } from './duration';
import { volumeModify } from './volume';

const playButton = document.getElementById('play-pause');
const volumeButton = document.getElementById('volume-icon');
const rangeInput = document.getElementById('range');

video.addEventListener('loadedmetadata', e => {
  timeModify(video.duration);
});

video.addEventListener('timeupdate', e => {
  timeCurrent(video.currentTime);
});

playButton.addEventListener('click', e => {
  console.dir(video);
  if (video.paused) {
    video.play();
    playButton.src = 'assets/images/pause-solid.svg';
  } else {
    video.pause();
    playButton.src = 'assets/images/play-solid.svg';
  }
});

volumeButton.addEventListener('click', () => {
  if (video.volume === 0) {
    volumeButton.src = volumeHigh;
    video.volume = 1;
  } else {
    volumeButton.src = volumeLow;
    video.volume = 0;
  }
});

rangeInput.addEventListener('change', () => {
  volumeModify(rangeInput.valueAsNumber);
});
