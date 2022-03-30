import styles from './styles';
import React from 'react';
import {MarginType} from '../../types/common';
import {Image, ImageSourcePropType} from 'react-native';

type Props = {
  source: ImageSourcePropType;
  size: number;
} & MarginType;

const CommonImage: React.FC<Props> = props => (
  <Image
    {...props}
    style={{
      width: props.size,
      height: props.size,
      marginTop: props.marginTop,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
      marginRight: props.marginRight,
    }}
  />
);
export default CommonImage;
