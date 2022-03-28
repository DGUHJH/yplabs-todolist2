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
