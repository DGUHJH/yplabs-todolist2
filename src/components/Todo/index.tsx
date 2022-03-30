import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  deleteTodoItemLoad,
  toggleModal,
  toggleTodoItemLoad,
} from '../../features/todo/slice';
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
      toggleModal({
        id,
        type: 'update',
        open: true,
        initialValue: content,
      }),
    );
  };

  const onDeleteButtonClick = () => {
    dispatch(deleteTodoItemLoad({id}));
  };

  const onToggleButtonClick = () => {
    dispatch(toggleTodoItemLoad({id, content}));
  };

  return (
    <View style={styles.root}>
      <CheckBox value={checked} onChange={onToggleButtonClick} />
      <View>
        <FlatList
          data={contentLineList}
          renderItem={({item, index}) =>
            index < 5 && (
              <Text
                onPress={onDetailsButtonClick}
                style={{
                  ...styles.text,
                  textDecorationLine: checked ? 'line-through' : 'none',
                }}
                key={`text_${index}`}>
                {item}
              </Text>
            )
          }
        />
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
