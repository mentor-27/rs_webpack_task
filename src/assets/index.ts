import icoCloudRain from './icons/cloud-rain.svg';
import icoCloudSnow from './icons/cloud-snow.svg';
import icoForest from './icons/forest.svg';
import icoSun from './icons/sun.svg';
import icoPause from './icons/pause.svg';

import sndRain from './sounds/rain.mp3';
import sndWinter from './sounds/winter.mp3';
import sndForest from './sounds/forest.mp3';
import sndSummer from './sounds/summer.mp3';

import bgRain from './rainy-bg.jpg';
import bgWinter from './winter-bg.jpg';
import bgForest from './night-forest.jpg';
import bgSummer from './summer-bg.jpg';

import { IAsset } from '../types/index';

const icons: IAsset = {
  icoCloudRain,
  icoCloudSnow,
  icoForest,
  icoSun,
  icoPause,
};
const sounds: IAsset = { sndRain, sndWinter, sndForest, sndSummer };
const backgrounds: IAsset = { bgRain, bgWinter, bgForest, bgSummer };

export { icons, sounds, backgrounds };
