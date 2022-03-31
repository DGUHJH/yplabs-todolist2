import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../features';
import {refreshTodoListLoad} from '../../features/todo/slice';
import {RootStackParamList} from '../../types/common';
import styles from './styles';
type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
const DetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    refreshTodoList();
  }, []);

  const refreshTodoList = () => {
    dispatch(refreshTodoListLoad());
  };

  const id = route.params.id;
  const todoItemData = store.todoList.filter(todo => todo.id === +id);

  const contentLineList = todoItemData[0]?.content
    ?.replace(' wogud', '')
    .split('\n');

  return (
    <View style={styles.root}>
      <Text>상세 내용</Text>
      <View style={styles.contentWrapper}>
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
