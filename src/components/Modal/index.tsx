import React, {Component, useEffect, useState} from 'react';
import {View, Modal, TextInput, Text} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RootState} from '../../features';
import {todoAction} from '../../features/todo/slice';
import styles from './styles';

// const CommonModal = () => {
//   const store = useSelector((state: RootState) => state.modal);
//   const [value, setValue] = useState<string>(store.initialValue);
//   const dispatch = useDispatch();

//   const onCreateTodoItem = () => {
//     dispatch(todoAction.createTodoItemLoad({content: value}));
//     onClose();
//   };

//   const onUpdateTodoItem = () => {
//     dispatch(todoAction.updateTodoItemLoad({id: store.id, content: value}));
//     onClose();
//   };

//   const onClose = () => {
//     dispatch(todoAction.toggleModal({open: false}));
//   };

//   useEffect(() => {
//     setValue(store.initialValue);
//   }, [store.initialValue]);

//   return (
//     <Modal animationType="slide" transparent={true} visible={store.open}>
//       <View style={styles.root}>
//         {store.type === 'create' && (
//           <View style={styles.modalRoot}>
//             <TextInput
//               style={styles.textInput}
//               value={value}
//               onChangeText={setValue}
//               multiline={true}
//             />
//             <Text style={styles.text} onPress={onCreateTodoItem}>
//               추가
//             </Text>
//             <Text style={styles.text} onPress={onClose}>
//               끄기
//             </Text>
//           </View>
//         )}
//         {store.type === 'update' && (
//           <View style={styles.modalRoot}>
//             <TextInput
//               style={styles.textInput}
//               value={value}
//               onChangeText={setValue}
//               multiline={true}
//             />
//             <Text style={styles.text} onPress={onUpdateTodoItem}>
//               수정
//             </Text>
//             <Text style={styles.text} onPress={onClose}>
//               끄기
//             </Text>
//           </View>
//         )}
//       </View>
//     </Modal>
//   );
// };

type State = {
  value: string;
};

type Props = {
  store: {
    id?: number;
    type?: 'create' | 'update';
    initialValue?: string;
    open: boolean;
  };
  todoAction: typeof todoAction;
};

class CommonModal extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {value: this.props.store.initialValue};
  }

  componentDidMount() {}
  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.store.initialValue !== this.props.store.initialValue) {
      this.setState({
        value: this.props.store.initialValue,
      });
    }
  }

  setValue = (text: string) => {
    this.setState({
      value: text,
    });
  };

  onCreateTodoItem = () => {
    this.props.todoAction.createTodoItemLoad({content: this.state.value});
    this.onClose();
  };

  onUpdateTodoItem = () => {
    this.props.todoAction.updateTodoItemLoad({
      id: this.props.store.id,
      content: this.state.value,
    });
    this.onClose();
  };

  onClose = () => {
    this.props.todoAction.toggleModal({open: false});
  };

  render() {
    const {store} = this.props;
    const {value} = this.state;

    return (
      <Modal animationType="slide" transparent={true} visible={store.open}>
        <View style={styles.root}>
          <View style={styles.modalRoot}>
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={this.setValue}
              multiline={true}
            />
            {store.type === 'create' && (
              <Text style={styles.text} onPress={this.onCreateTodoItem}>
                추가
              </Text>
            )}
            {store.type === 'update' && (
              <Text style={styles.text} onPress={this.onUpdateTodoItem}>
                수정
              </Text>
            )}
            <Text style={styles.text} onPress={this.onClose}>
              끄기
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}
export default connect(
  ({modal}: RootState) => ({
    store: modal,
  }),
  dispatch => ({
    todoAction: bindActionCreators(todoAction, dispatch),
  }),
)(CommonModal);
