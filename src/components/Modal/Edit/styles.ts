import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    // height: 105,
    // flex: 1,

    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 5,
  },
  modalRoot: {
    width: '80%',
    backgroundColor: '#fff',
    // flex: 1,
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
