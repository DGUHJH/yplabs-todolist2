import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalRoot: {
    width: '80%',
    backgroundColor: '#fff',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  textInput: {
    width: 250,
    height: 100,
    padding: 10,
    textAlignVertical: 'top',
  },
  text: {marginRight: 3},
});

export default styles;
