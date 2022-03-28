import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import AddModal from '../../components/Modal/Add';
import Todo from '../../components/Todo';
import {RootState} from '../../features';
import {todoAction} from '../../features/todo/slice';
import {RootStackParamList} from '../../types/common';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<Props> = ({navigation}) => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [addMode, setAddMode] = useState<boolean>(false);

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    dispatch(todoAction.refreshTodoListLoad());
  };

  const onDeleteButtonClick = (id: number) => () => {
    dispatch(todoAction.deleteTodoItemLoad({id}));
  };

  const onUpdateTodoItem = (id: number) => (content: string) => {
    dispatch(todoAction.updateTodoItemLoad({id, content}));
  };

  const onCreateTodoItem = (content: string) => () => {
    dispatch(todoAction.createTodoItemLoad({content}));
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.todoListContainer}>
        {store.todoList.map(todoItem => (
          <Todo
            id={todoItem.id}
            content={todoItem.content}
            onDeleteButtonClick={onDeleteButtonClick(todoItem.id)}
            onUpdateTodoItem={onUpdateTodoItem(todoItem.id)}
            onDetailsButtonClick={() =>
              navigation.push('Details', {id: todoItem.id})
            }
            key={`todo_item_${todoItem.id}`}
          />
        ))}
        <Text onPress={() => setAddMode(prev => !prev)}>추가</Text>
      </ScrollView>
      {addMode && (
        <AddModal
          onClose={() => setAddMode(false)}
          onCreateTodoItem={onCreateTodoItem}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
