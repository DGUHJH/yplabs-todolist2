import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    borderBottomWidth: 10,
    borderColor: colors.gray200,
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
  headerImgWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray200,
    overflow: 'hidden',
  },
  headerTitleContainer: {
    display: 'flex',
    marginLeft: 6,
  },
  headerMoreButtonWrapper: {
    position: 'absolute',
    top: 16,
    right: 20,
  },
  contentContainer: {
    display: 'flex',
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 0.5,
    borderColor: colors.gray300,
  },
  menuContainer: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  menuItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 24,
  },
});

export default styles;
