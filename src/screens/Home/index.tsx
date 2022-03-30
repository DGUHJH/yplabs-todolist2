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

// 회고
// nativeEvent 처리
// 완료 modal

// 후속 작업
// flatlist 기능 보기
// 완료 modal 처리
// 위로 스크롤 당겼을때 refresh
// useInput 등과 같은 custom hook을 만들어서 사용

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
      <FlatList
        style={styles.todoListContainer}
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
      <CommonModal />
    </SafeAreaView>
  );
};

export default HomeScreen;
