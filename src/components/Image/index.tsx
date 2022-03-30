import styles from './styles';
import React from 'react';
import {MarginType} from '../../types/common';
import {Image, ImageSourcePropType} from 'react-native';

type Props = {
  source: ImageSourcePropType;
  size: number;
  onPress: () => void;
  style?: any;
} & MarginType;

const CommonImage: React.FC<Props> = props => (
  <Image
    {...props}
    style={{
      width: props.size,
      height: props.size,
      marginTop: props.marginTop ?? 0,
      marginBottom: props.marginBottom ?? 0,
      marginLeft: props.marginLeft ?? 0,
      marginRight: props.marginRight ?? 0,
    }}
  />
);
export default CommonImage;
