import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';

const useHeaderAnimation = (): [
  Animated.Value,
  Animated.AnimatedInterpolation,
  Animated.AnimatedInterpolation,
] => {
  const HEADER_MAX_HEIGHT = 100; // max header height
  const HEADER_MIN_HEIGHT = 50; // min header height
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const scrollY = useRef(new Animated.Value(0)).current;

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });

  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -48],
    extrapolate: 'clamp',
  });

  return [scrollY, titleScale, titleTranslateY];
};

export default useHeaderAnimation;
