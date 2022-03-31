import {Text, View} from 'react-native';
import Styles from './styles';
import colors from '../../styles/colors';
import {MarginType} from '../../types/common';

type Props = {
  color: string;
  fontSize: number;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
} & MarginType;

const Typography: React.FC<Props> = ({
  color,
  fontSize,
  fontWeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  children,
}) => {
  return (
    <View style={Styles.root}>
      <Text
        style={{
          color,
          fontSize,
          fontWeight,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
        }}>
        {children}
      </Text>
    </View>
  );
};

export default Typography;
