import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import CommonModal from '../../components/Modal';
import Todo from '../../components/Todo';
import {RootState} from '../../features';
import {refreshTodoListLoad, toggleModal} from '../../features/todo/slice';
import useAsyncRefresh from '../../hooks/useAsyncRefresh';
import {RootStackParamList} from '../../types/common';
import styles from './styles';
import {debounce} from 'lodash';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<Props> = ({navigation}) => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [refreshing, onRefresh] = useAsyncRefresh();
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    refreshTodoList();
  }, [refreshing]);

  const refreshTodoList = () => {
    dispatch(refreshTodoListLoad());
  };
  const onAddButtonClick = () => {
    dispatch(toggleModal({type: 'create', open: true}));
  };

  const onEndReached = useCallback(
    debounce(() => {
      setScroll(prev => prev + 1);
    }, 500),
    [scroll],
  );
  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        style={styles.todoListContainer}
        data={store.todoList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item, index}) =>
          index < 18 + scroll * 2 && (
            <Todo
              id={item.id}
              content={item.content}
              onDetailsButtonClick={() =>
                navigation.push('Details', {id: item.id})
              }
              key={`todo_item_${item.id}`}
            />
          )
        }
        onEndReached={onEndReached}
      />
      <TouchableOpacity
        onPress={onAddButtonClick}
        style={styles.addButtonWrapper}>
        <Text>추가</Text>
      </TouchableOpacity>
      <CommonModal />
    </SafeAreaView>
  );
};

export default HomeScreen;
