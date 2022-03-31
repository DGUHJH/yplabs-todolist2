import styles from './styles';
import React from 'react';
import {MarginType} from '../../types/common';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';

type Props = {
  source: ImageSourcePropType;
  width: number | string;
  height: number | string;
  onPress?: () => void;
  style?: any;
} & MarginType;

const CommonImage: React.FC<Props> = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      width: props.width,
      height: props.height,
    }}>
    <Image
      {...props}
      style={{
        width: props.width,
        height: props.height,
        marginTop: props.marginTop ?? 0,
        marginBottom: props.marginBottom ?? 0,
        marginLeft: props.marginLeft ?? 0,
        marginRight: props.marginRight ?? 0,
      }}
    />
  </TouchableOpacity>
);
export default CommonImage;
