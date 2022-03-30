import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {todoAction} from '../../features/todo/slice';
import styles from './styles';

type Props = {
  id: number;
  onDetailsButtonClick?: () => void;
  content?: string;
};

const Todo: React.FC<Props> = ({id, onDetailsButtonClick, content}) => {
  const dispatch = useDispatch();
  const checked = content.indexOf(' wogud') !== -1;
  const filterContent = checked ? content.replace(' wogud', '') : content;

  const contentLineList = filterContent.split('\n');
  const onEditButtonClick = () => {
    dispatch(
      todoAction.toggleModal({
        id,
        type: 'update',
        open: true,
        initialValue: content,
      }),
    );
  };

  const onDeleteButtonClick = () => {
    dispatch(todoAction.deleteTodoItemLoad({id}));
  };

  const onToggleButtonClick = () => {
    dispatch(todoAction.toggleTodoItemLoad({id, content}));
  };

  return (
    <View style={styles.root}>
      <CheckBox value={checked} onChange={onToggleButtonClick} />
      <View>
        {contentLineList.map(
          (contentLine, index) =>
            index < 5 && (
              <Text
                onPress={onDetailsButtonClick}
                style={{
                  ...styles.text,
                  textDecorationLine: checked ? 'line-through' : 'none',
                }}
                key={`text_${index}`}>
                {contentLine}
              </Text>
            ),
        )}
        {/* after fix */}
        {contentLineList.length > 5 && (
          <Text
            onPress={onDetailsButtonClick}
            style={{
              ...styles.text,
              textDecorationLine: checked ? 'line-through' : 'none',
            }}>
            ...
          </Text>
        )}
      </View>
      <Text
        onPress={checked ? () => {} : onEditButtonClick}
        style={{
          ...styles.text,
          textDecorationLine: checked ? 'line-through' : 'none',
        }}>
        수정
      </Text>
      <Text
        onPress={checked ? () => {} : onDeleteButtonClick}
        style={{
          ...styles.text,
          textDecorationLine: checked ? 'line-through' : 'none',
        }}>
        삭제
      </Text>
    </View>
  );
};

export default Todo;
