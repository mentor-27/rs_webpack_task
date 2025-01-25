export interface IAsset {
  [key: string]: string;
}

export interface IData {
  image: string;
  sound: string;
  icon: string;
}

export interface IDataSet {
  moods: IData[];
  pauseIcon: string;
}
