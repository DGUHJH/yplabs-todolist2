import {Text, View} from 'react-native';
import Styles from './styles';

type Props = {
  color: string;
  fontSize: number;
};

const Typography: React.FC<Props> = ({color, fontSize, children}) => {
  return (
    <View style={Styles.root}>
      <Text style={{color, fontSize}}>{children}</Text>
    </View>
  );
};

export default Typography;
