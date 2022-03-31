import React from 'react';
import {View} from 'react-native';
import CommonImage from '../../Image';
import styles from './styles';
import icon from '../../../assets/images/icHeartFill18.png';
import more from '../../../assets/images/More_18_Gray800.png';
import heartEmpty from '../../../assets/images/icHeartEmpty18.png';
import comment from '../../../assets/images/icComment18.png';
import Typography from '../../Typography';
import colors from '../../../styles/colors';

type Props = {
  title: string;
  content: string;
  date: string;
  heartCount: number;
  commentCount: number;
};

const FeedCard: React.FC<Props> = ({
  title,
  content,
  date,
  heartCount,
  commentCount,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImgWrapper}>
          <CommonImage source={icon} width={32} height={32} />
        </View>
        <View style={styles.headerTitleContainer}>
          <Typography fontSize={14} color={colors.black} fontWeight="500">
            {title}
          </Typography>
          <Typography fontSize={12} color={colors.gray700} fontWeight="400">
            {date}
          </Typography>
        </View>
        <View style={styles.headerMoreButtonWrapper}>
          <CommonImage source={more} width={18} height={18} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Typography fontSize={15} color={colors.black} fontWeight="400">
          {content}
        </Typography>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menuItemContainer}>
          <CommonImage
            source={heartEmpty}
            width={18}
            height={18}
            marginRight={4}
          />
          <Typography fontSize={13} fontWeight="400" color={colors.gray500}>
            {heartCount}
          </Typography>
        </View>
        <View style={styles.menuItemContainer}>
          <CommonImage
            source={comment}
            width={18}
            height={18}
            marginRight={4}
          />
          <Typography fontSize={13} fontWeight="400" color={colors.gray500}>
            {commentCount}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default FeedCard;
