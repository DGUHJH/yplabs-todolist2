import {Text, View} from 'react-native';
import Styles from './styles';

type Props = {
  id: number;
  onCheckboxClick?: () => void;
  onUpdateTodoItem?: (value: string) => void;
  onDeleteButtonClick?: () => void;
  content?: string;
};

const Todo: React.FC<Props> = ({
  id,
  onCheckboxClick,
  onDeleteButtonClick,
  onUpdateTodoItem,
  content,
}) => {
  return (
    <View style={Styles.root}>
      <Text>{content}</Text>
    </View>
  );
};

export default Todo;
