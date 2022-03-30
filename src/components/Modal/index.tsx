import React, {Component, useEffect, useState} from 'react';
import {View, Modal, TextInput, Text} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../features';
import {
  createTodoItemLoad,
  toggleModal,
  updateTodoItemLoad,
} from '../../features/todo/slice';
import useInput from '../../hooks/useInput';
import styles from './styles';

const CommonModal = () => {
  const store = useSelector((state: RootState) => state.modal);
  const [value, onChange] = useInput(store.initialValue);
  const dispatch = useDispatch();

  const onCreateTodoItem = () => {
    dispatch(createTodoItemLoad({content: value}));
    onClose();
  };

  const onUpdateTodoItem = () => {
    dispatch(updateTodoItemLoad({id: store.id, content: value}));
    onClose();
  };

  const onClose = () => {
    dispatch(toggleModal({open: false}));
  };

  useEffect(() => {
    onChange(store.initialValue);
  }, [store.initialValue]);

  return (
    <Modal animationType="slide" transparent={true} visible={store.open}>
      <View style={styles.root}>
        <View style={styles.modalRoot}>
          {store.type === 'create' || store.type === 'update' ? (
            <>
              <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChange}
                multiline={true}
              />
              {store.type === 'create' && (
                <Text style={styles.text} onPress={onCreateTodoItem}>
                  추가
                </Text>
              )}
              {store.type === 'update' && (
                <Text style={styles.text} onPress={onUpdateTodoItem}>
                  수정
                </Text>
              )}
            </>
          ) : (
            <Text>
              {store.type === 'complete' && '성공하였습니다.'}
              {store.type === 'error' && '실패하였습니다.'}
            </Text>
          )}
          <Text style={styles.text} onPress={onClose}>
            끄기
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default CommonModal;

// type State = {
//   value: string;
// };

// type Props = {
//   store: {
//     id?: number;
//     type?: 'create' | 'update';
//     initialValue?: string;
//     open: boolean;
//   };
//   createTodoItemLoad: typeof createTodoItemLoad;
//   updateTodoItemLoad: typeof updateTodoItemLoad;
//   toggleModal: typeof toggleModal;
// };

// class CommonModal extends Component<Props, State> {
//   constructor(props) {
//     super(props);
//     this.state = {value: this.props.store.initialValue};

//     console.log(this.props);
//   }

//   componentDidMount() {}
//   componentDidUpdate(prevProps: Props) {
//     if (prevProps.store.initialValue !== this.props.store.initialValue) {
//       this.setState({
//         value: this.props.store.initialValue,
//       });
//     }
//   }

//   setValue = (text: string) => {
//     this.setState({
//       value: text,
//     });
//   };

//   onCreateTodoItem = () => {
//     this.props.createTodoItemLoad({content: this.state.value});
//     this.onClose();
//   };

//   onUpdateTodoItem = () => {
//     this.props.updateTodoItemLoad({
//       id: this.props.store.id,
//       content: this.state.value,
//     });
//     this.onClose();
//   };

//   onClose = () => {
//     this.props.toggleModal({open: false});
//   };

//   render() {
//     const {store} = this.props;
//     const {value} = this.state;
//     return (
//       <Modal animationType="slide" transparent={true} visible={store.open}>
//         <View style={styles.root}>
//           {store.type === 'create' && (
//             <View style={styles.modalRoot}>
//               <TextInput
//                 style={styles.textInput}
//                 value={value}
//                 onChangeText={this.setValue}
//                 multiline={true}
//               />
//               <Text style={styles.text} onPress={this.onCreateTodoItem}>
//                 추가
//               </Text>
//               <Text style={styles.text} onPress={this.onClose}>
//                 끄기
//               </Text>
//             </View>
//           )}
//           {store.type === 'update' && (
//             <View style={styles.modalRoot}>
//               <TextInput
//                 style={styles.textInput}
//                 value={value}
//                 onChangeText={this.setValue}
//                 multiline={true}
//               />
//               <Text style={styles.text} onPress={this.onUpdateTodoItem}>
//                 수정
//               </Text>
//               <Text style={styles.text} onPress={this.onClose}>
//                 끄기
//               </Text>
//             </View>
//           )}
//         </View>
//       </Modal>
//     );
//   }
// }
// export default connect(
//   ({modal}: RootState) => ({
//     store: modal,
//   }),
//   dispatch => ({
//     createTodoItemLoad: bindActionCreators(createTodoItemLoad, dispatch),
//     updateTodoItemLoad: bindActionCreators(updateTodoItemLoad, dispatch),
//     toggleModal: bindActionCreators(toggleModal, dispatch),
//   }),
// )(CommonModal);
