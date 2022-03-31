import {StyleSheet} from 'react-native';
import {deviceWidth} from '../../utils/common';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  headerAnimationContainer: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  header: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'absolute',
    bottom: 50,
  },
  tabBarContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  tabBarItemWrapper: {
    height: 50,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarItemPointed: {
    borderBottomWidth: 1,
  },
  carouselItemContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'visible',
    position: 'relative',
    zIndex: 0,
  },
  carouselItemWrapper: {
    width: '100%',
    height: 54,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  carouselItemTypoWrapper: {
    position: 'absolute',
    top: 18,
    left: 20,
  },
  feedListContainer: {
    paddingTop: 98,
    zIndex: 2,
  },
});

export default styles;
