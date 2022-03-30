import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import CommonModal from '../../components/Modal';
import Todo from '../../components/Todo';
import {RootState} from '../../features';
import {refreshTodoListLoad, toggleModal} from '../../features/todo/slice';
import useAsyncRefresh from '../../hooks/useAsyncRefresh';
import {RootStackParamList} from '../../types/common';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<Props> = ({navigation}) => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [refreshing, onRefresh] = useAsyncRefresh();

  useEffect(() => {
    refreshTodoList();
  }, [refreshing]);

  const refreshTodoList = () => {
    dispatch(refreshTodoListLoad());
  };
  const onAddButtonClick = () => {
    dispatch(toggleModal({type: 'create', open: true}));
  };

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        style={styles.todoListContainer}
        data={store.todoList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
      <View style={styles.addButtonWrapper}>
        <Text onPress={onAddButtonClick}>추가</Text>
      </View>
      <CommonModal />
    </SafeAreaView>
  );
};

export default HomeScreen;
