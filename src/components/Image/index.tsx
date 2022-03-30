import styles from './styles';
import React from 'react';
import {MarginType} from '../../types/common';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';

type Props = {
  source: ImageSourcePropType;
  size: number;
  onPress: () => void;
  style?: any;
} & MarginType;

const CommonImage: React.FC<Props> = props => (
  <TouchableOpacity onPress={props.onPress}>
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
  </TouchableOpacity>
);
export default CommonImage;
