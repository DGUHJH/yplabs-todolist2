import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import EditModal from '../Modal/Edit';
import styles from './styles';

type Props = {
  id: number;
  onUpdateTodoItem?: (value: string) => void;
  onDeleteButtonClick?: () => void;
  onDetailsButtonClick?: () => void;
  content?: string;
};

const Todo: React.FC<Props> = ({
  id,
  onDeleteButtonClick,
  onUpdateTodoItem,
  onDetailsButtonClick,
  content,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const contentLineList = content.split('\n');

  // modal 컴포넌트 하나로 통일, react-native-modal library 자체적인 모듈 사용
  // modal 자체는 home 페이지에서 불러온다.
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
                }}>
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
        onPress={checked ? () => {} : () => setEditMode(prev => !prev)}
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
      {editMode && (
        <EditModal
          initialValue={content}
          onClose={() => setEditMode(false)}
          onUpdateTodoItem={onUpdateTodoItem}
        />
      )}
    </View>
  );
};

export default Todo;
