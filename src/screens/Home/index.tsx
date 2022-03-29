import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import CommonModal from '../../components/Modal';
import Todo from '../../components/Todo';
import {RootState} from '../../features';
import {todoAction} from '../../features/todo/slice';
import {RootStackParamList} from '../../types/common';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<Props> = ({navigation}) => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    dispatch(todoAction.refreshTodoListLoad());
  };
  const onAddButtonClick = () => {
    dispatch(todoAction.toggleModal({type: 'create', open: true}));
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.todoListContainer}>
        <FlatList
          data={store.todoList}
          renderItem={({item}) => (
            <Todo
              id={item.id}
              content={item.content}
              onDetailsButtonClick={() =>
                navigation.push('Details', {id: item.id})
              }
              key={`todo_item_${item.id}`}
            />
          )}
        />
        <Text onPress={onAddButtonClick}>추가</Text>
      </ScrollView>
      <CommonModal />
    </SafeAreaView>
  );
};

export default HomeScreen;
