import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  todoListContainer: {
    width: '100%',
    flex: 1,
  },
  addButtonWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
  },
});

export default styles;
