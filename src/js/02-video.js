var throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const lastSavedTime = localStorage.getItem('videoplayer-current-time');
console.log(lastSavedTime);

if (lastSavedTime) {
  player.setCurrentTime(lastSavedTime);
}

player.on(
  'timeupdate',
  throttle(function (timeObj) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(timeObj.seconds)
    );
  }, 1000)
);
