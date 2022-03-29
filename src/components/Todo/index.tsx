import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {todoAction} from '../../features/todo/slice';
import styles from './styles';

type Props = {
  id: number;
  onDeleteButtonClick?: () => void;
  onDetailsButtonClick?: () => void;
  content?: string;
};

const Todo: React.FC<Props> = ({
  id,
  onDeleteButtonClick,
  onDetailsButtonClick,
  content,
}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(false);
  const contentLineList = content.split('\n');
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

  // scrollview 안에 있는 컴포넌트 map 돌려서 사용 하지 않고 flatList 사용

  return (
    <View style={styles.root}>
      <CheckBox value={checked} onChange={() => setChecked(prev => !prev)} />
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
