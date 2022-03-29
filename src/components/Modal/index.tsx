import React, {useEffect, useState} from 'react';
import {View, Modal, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../features';
import {todoAction} from '../../features/todo/slice';
import styles from './styles';

const CommonModal = () => {
  const store = useSelector((state: RootState) => state.modal);
  const [value, setValue] = useState<string>(store.initialValue);
  const dispatch = useDispatch();

  const onCreateTodoItem = () => {
    dispatch(todoAction.createTodoItemLoad({content: value}));
    onClose();
  };

  const onUpdateTodoItem = () => {
    dispatch(todoAction.updateTodoItemLoad({id: store.id, content: value}));
    onClose();
  };

  const onClose = () => {
    dispatch(todoAction.toggleModal({open: false}));
  };

  useEffect(() => {
    setValue(store.initialValue);
  }, [store.initialValue]);

  return (
    <Modal animationType="slide" transparent={true} visible={store.open}>
      <View style={styles.root}>
        {store.type === 'create' && (
          <View style={styles.modalRoot}>
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={setValue}
              multiline={true}
            />
            <Text style={styles.text} onPress={onCreateTodoItem}>
              추가
            </Text>
            <Text style={styles.text} onPress={onClose}>
              끄기
            </Text>
          </View>
        )}
        {store.type === 'update' && (
          <View style={styles.modalRoot}>
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={setValue}
              multiline={true}
            />
            <Text style={styles.text} onPress={onUpdateTodoItem}>
              수정
            </Text>
            <Text style={styles.text} onPress={onClose}>
              끄기
            </Text>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default CommonModal;
