import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

type Props = {
  onClose: () => void;
  onCreateTodoItem: (content: string) => () => void;
};

const AddModal: React.FC<Props> = ({onCreateTodoItem, onClose}) => {
  const [value, setValue] = useState<string>('');
  const onAddButtonPress = () => {
    onCreateTodoItem(value)();
    onClose();
  };

  return (
    <View style={styles.root}>
      <View style={styles.modalRoot}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          multiline={true}
        />
        <Text style={styles.text} onPress={onAddButtonPress}>
          추가
        </Text>
        <Text style={styles.text} onPress={onClose}>
          끄기
        </Text>
      </View>
    </View>
  );
};

export default AddModal;
