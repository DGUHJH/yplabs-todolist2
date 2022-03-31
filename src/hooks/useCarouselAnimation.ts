import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';
import {deviceWidth} from '../utils/common';

const useCarouselAnimation = (): Animated.AnimatedInterpolation => {
  const carouselX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(carouselX, {
        toValue: 9,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [carouselX]);

  const carouselRotate = carouselX.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    outputRange: [
      0,
      0,
      0,
      0,
      -1 * deviceWidth,
      -1 * deviceWidth,
      -1 * deviceWidth,
      -1 * deviceWidth,
      -1 * deviceWidth,
      0,
    ],
  });
  return carouselRotate;
};

export default useCarouselAnimation;
