import MoodWidget from './moodWidget.js';
import { icons, sounds, backgrounds } from './assets';
import './style.scss';

const data = {
  moods: [
    {
      image: backgrounds.bgSummer,
      sound: sounds.sndSummer,
      icon: icons.icoSun
    },
    {
      image: backgrounds.bgRain,
      sound: sounds.sndRain,
      icon: icons.icoCloudRain
    },
    {
      image: backgrounds.bgWinter,
      sound: sounds.sndWinter,
      icon: icons.icoCloudSnow
    },
    {
      image: backgrounds.bgForest,
      sound: sounds.sndForest,
      icon: icons.icoForest
    }
  ],
  pauseIcon: icons.icoPause
};

new MoodWidget(data).render();
