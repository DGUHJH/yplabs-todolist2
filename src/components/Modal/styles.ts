import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerRoot: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  modalRoot: {
    width: '80%',
    height: '40%',
    backgroundColor: '#fff',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: `30%`,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    zIndex: 2,
  },
  textInput: {
    width: '90%',
    height: '70%',
    padding: 10,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
  },
  text: {marginRight: 3},
  optionButtonWrapper: {
    position: 'absolute',
    top: 5,
    right: 30,
  },
  closeButtonWrapper: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default styles;
