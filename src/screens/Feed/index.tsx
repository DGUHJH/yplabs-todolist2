import styles from './styles';
import React, {useCallback, useState} from 'react';
import {
  Animated,
  FlatList,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Typography from '../../components/Typography';
import colors from '../../styles/colors';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import blueBanner from '../../assets/images/imgFeedBanner02.png';
import orangeBanner from '../../assets/images/imgFeedBanner03.png';
import CommonImage from '../../components/Image';
import {MainCarouselItemType} from '../../types/common';
import {deviceWidth} from '../../utils/common';
import useCarouselAnimation from '../../hooks/useCarouselAnimation';
import feedData from '../../assets/json/feed.json';
import FeedCard from '../../components/Card/Feed';
import {debounce} from 'lodash';
import useHeaderAnimation from '../../hooks/useHeaderAnimation';

const tabBarList = ['Follow', 'Recent'];

const carouselList: MainCarouselItemType[] = [
  {
    label: 'MUST-READ! Feed guidelines',
    source: blueBanner,
  },
  {
    label: 'Free-SNS function newly added!',
    source: orangeBanner,
  },
];

const FeedScreen = () => {
  const [tabBarStep, setTabBarStep] = useState<number>(0);
  const [scrollY, titleScale, titleTranslateY] = useHeaderAnimation();
  const carouselRotate = useCarouselAnimation();
  const [scroll, setScroll] = useState<number>(0);
  const insets = useSafeAreaInsets();

  const onEndReached = useCallback(
    debounce(() => {
      setScroll(prev => prev + 1);
    }, 500),
    [scroll],
  );

  const header = () => (
    <View style={styles.header}>
      <Typography fontSize={21} fontWeight="700" color={colors.black}>
        Feed
      </Typography>
    </View>
  );

  const tabBar = () => (
    <View
      style={{
        ...styles.tabBarContainer,
      }}>
      {tabBarList.map((tabBarItem, index) => (
        <TouchableWithoutFeedback
          onPress={() => setTabBarStep(index)}
          key={`tab_bar_${index}`}>
          <View
            style={
              tabBarStep === index
                ? {...styles.tabBarItemWrapper, ...styles.tabBarItemPointed}
                : styles.tabBarItemWrapper
            }>
            <Typography
              fontSize={15}
              fontWeight={tabBarStep === index ? '700' : '400'}
              color={tabBarStep === index ? colors.black : colors.gray400}>
              {tabBarItem}
            </Typography>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );

  const carousel = () => (
    <Animated.View
      style={{
        ...styles.carouselItemContainer,
        transform: [{translateX: carouselRotate}],
      }}>
      {carouselList.map((carouselItem, index) => (
        <View style={styles.carouselItemWrapper} key={`carousel_item_${index}`}>
          <CommonImage
            source={carouselItem.source}
            width={deviceWidth}
            height={54}
          />
          <View style={styles.carouselItemTypoWrapper}>
            <Typography fontSize={14} fontWeight="700" color={colors.black}>
              {carouselItem.label}
            </Typography>
          </View>
        </View>
      ))}
    </Animated.View>
  );

  const listHeader = () => (
    <>
      {header()}
      {tabBar()}
      {carousel()}
    </>
  );

  return (
    <SafeAreaView
      mode="margin"
      style={{
        ...styles.root,
      }}>
      <Animated.FlatList
        contentContainerStyle={styles.feedListContainer}
        scrollEventThrottle={16}
        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
        //   {
        //     useNativeDriver: true,
        //   },
        // )}
        onScrollEndDrag={onEndReached}
        ListHeaderComponent={listHeader()}
        stickyHeaderHiddenOnScroll={true}
        data={feedData}
        renderItem={({item, index, separators}) =>
          index < 18 + scroll * 2 && (
            <FeedCard
              {...item}
              title={`${item.title} ${index}`}
              key={`feed_card_${index}`}
            />
          )
        }
        onEndReached={onEndReached}
        stickyHeaderIndices={[0, 0]}
      />
      {/* <Animated.View
        style={[
          {
            ...styles.headerAnimationContainer,
            height: 98,
            transform: [{translateY: titleTranslateY}],
          },
        ]}>
        {header()}
        {tabBar()}
      </Animated.View> */}
    </SafeAreaView>
  );
};

// flatlist 헤더에 요소 3개를 넣고 그 중 가운데껏만 stickyHeader로 만들고 싶은데 어떻게하나요 보통??
// 커뮤니티에 질문 드렸을 땐 flatList를 하나 더 만들라고 하시는데 이게 맞는 방법인지 궁금합니다.

export default FeedScreen;
