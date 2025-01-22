import MoodWidget from './moodWidget.js';
import summerBg from './assets/summer-bg.jpg';
import rainyBg from './assets/rainy-bg.jpg';
import winterBg from './assets/winter-bg.jpg';
import nightForestBg from './assets/night-forest.jpg';
import summerSound from './assets/sounds/summer.mp3';
import rainySound from './assets/sounds/rain.mp3';
import winterSound from './assets/sounds/winter.mp3';
import nightForestSound from './assets/sounds/forest.mp3';
import summerIcon from './assets/icons/sun.svg';
import rainIcon from './assets/icons/cloud-rain.svg';
import snowIcon from './assets/icons/cloud-snow.svg';
import nightForestIcon from './assets/icons/forest.svg';
import pauseIcon from './assets/icons/pause.svg';
import './style.scss';

const data = {
  moods: [
    {
      image: summerBg,
      sound: summerSound,
      icon: summerIcon,
    },
    {
      image: rainyBg,
      sound: rainySound,
      icon: rainIcon,
    },
    {
      image: winterBg,
      sound: winterSound,
      icon: snowIcon,
    },
    {
      image: nightForestBg,
      sound: nightForestSound,
      icon: nightForestIcon,
    },
  ],
  pauseIcon,
};

new MoodWidget(data).render();
