import React from 'react';
import {View} from 'react-native';
import {MarginType} from '../../types/common';
import styles from './styles';

type Props = {
  width: number | string;
  height: number | string;
} & MarginType;

const Divider: React.FC<Props> = props => {
  return <View style={{...props}} />;
};

export default Divider;
