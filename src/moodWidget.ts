import { IDataSet } from './types/index';

export default class MoodWidget {
  audios: HTMLAudioElement[] = [];
  icons: HTMLImageElement[] = [];
  volume: number = 50;
  playingIndex: number = 0;
  bgElement: HTMLDivElement = document.createElement('div');
  captionElement: HTMLHeadingElement = document.createElement('h3');
  appElement: HTMLDivElement = document.createElement('div');
  moodsWrapperElement: HTMLDivElement = document.createElement('div');
  volumeElement: HTMLInputElement = document.createElement('input');

  constructor(private data: IDataSet) {
    this.data = data;
    this.init(this.data);
  }

  setPlayingIndex(index: number) {
    this.playingIndex = index;
  }

  setVolume(volume: number) {
    this.volume = Number(volume) / 100;
    this.audios.forEach((audio) => (audio.volume = Number(volume) / 100));
  }

  init(data: IDataSet) {
    this.bgElement.id = 'bg';
    this.captionElement.id = 'caption';
    this.captionElement.textContent = 'Weather sounds';
    this.appElement.id = 'app';
    this.moodsWrapperElement.id = 'moodsWrapper';
    this.volumeElement.type = 'range';
    this.volumeElement.value = `${this.volume}`;
    this.volumeElement.id = 'moodVolume';
    this.volumeElement.oninput = ({ target }) =>
      this.setVolume(+(<HTMLInputElement>target).value);

    data.moods.forEach((mood, index: number) => {
      const moodBlock = document.createElement('div');
      moodBlock.classList.add('moodItem');
      moodBlock.dataset.index = `${index}`;
      moodBlock.style.backgroundImage = `url("${mood.image}")`;

      const icon = document.createElement('img');
      this.icons.push(icon);
      icon.src = mood.icon;
      icon.classList.add('icon');

      const audio = document.createElement('audio');
      this.audios.push(audio);
      audio.src = mood.sound;
      audio.classList.add('moodSound');
      audio.dataset.index = `${index}`;

      moodBlock.onclick = () => {
        this.audios[index].onpause = () => {
          this.icons[index].src = mood.icon;
        };
        if (this.playingIndex === index) {
          if (this.audios[index].paused) {
            this.audios[index].play();
            this.icons[index].src = data.pauseIcon;
          } else {
            this.audios[index].pause();
          }
        } else if (this.playingIndex !== index) {
          this.audios[this.playingIndex].pause();
          this.icons[this.playingIndex].src =
            data.moods[this.playingIndex].icon;
          this.audios[index].currentTime = 0;
          this.audios[index].play();
          this.icons[index].src = data.pauseIcon;
          this.bgElement.style.backgroundImage = `url("${mood.image}")`;
          this.setPlayingIndex(index);
        }
      };

      moodBlock.append(icon);
      moodBlock.append(audio);
      this.moodsWrapperElement.append(moodBlock);
    });

    this.setVolume(this.volume);
    this.appElement.append(this.moodsWrapperElement);
    this.appElement.append(this.volumeElement);
    this.bgElement.style.backgroundImage = `url("${data.moods[0].image}")`;
  }

  render() {
    document.body.append(this.bgElement, this.captionElement, this.appElement);
  }
}
