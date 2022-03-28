import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../features';
import {todoAction} from '../../features/todo/slice';
import {RootStackParamList} from '../../types/common';
type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
const DetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    dispatch(todoAction.refreshTodoListLoad());
  };

  const id = route.params.id;
  const todoItemData = store.todoList.filter(todo => todo.id === +id);

  const contentLineList = todoItemData[0]?.content.split('\n');

  return (
    <View>
      <Text>상세</Text>
      <View>
        {todoItemData.length === 0
          ? '잘못된 접근입니다.'
          : contentLineList?.map((contentLine, index) => (
              <Text key={`todo_item_content_line_${index}`}>{contentLine}</Text>
            ))}
      </View>
    </View>
  );
};

export default DetailsScreen;
