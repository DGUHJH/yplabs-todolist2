import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Details: {id: number};
};

export type MarginType = {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

export type MainCarouselItemType = {
  label: string;
  source: ImageSourcePropType;
};
