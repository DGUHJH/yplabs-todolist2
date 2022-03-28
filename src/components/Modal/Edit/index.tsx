import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

type Props = {
  initialValue: string;
  onClose: () => void;
  onUpdateTodoItem: (content: string) => void;
};

const EditModal: React.FC<Props> = ({
  initialValue,
  onUpdateTodoItem,
  onClose,
}) => {
  const [value, setValue] = useState<string>(initialValue);
  const onUpdateButtonPress = () => {
    onUpdateTodoItem(value);
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
        <Text style={styles.text} onPress={onUpdateButtonPress}>
          수정
        </Text>
        <Text style={styles.text} onPress={onClose}>
          끄기
        </Text>
      </View>
    </View>
  );
};

export default EditModal;
