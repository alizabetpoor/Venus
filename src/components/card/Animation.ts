import {Animated} from 'react-native';
import {useState} from 'react';
const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(0));
const [animatedIcon, setAnimatedIcon] = useState(new Animated.Value(0));

const animationDuration = 400;

const CloseCardAnimation = () => {
  Animated.timing(animatedHeight, {
    toValue: 0,
    useNativeDriver: false,
    duration: animationDuration,
  }).start();
  Animated.timing(animatedIcon, {
    toValue: 0,
    useNativeDriver: false,
    duration: animationDuration,
  }).start();
};

const OpenCardAnimation = () => {
  Animated.timing(animatedHeight, {
    toValue: 100,
    useNativeDriver: false,
    duration: animationDuration,
  }).start();
  Animated.timing(animatedIcon, {
    toValue: 100,
    useNativeDriver: false,
    duration: animationDuration - 100,
  }).start();
};

const interpolatedIcon = animatedIcon.interpolate({
  inputRange: [0, 100],
  outputRange: ['0deg', '90deg'],
});
const interpolatedHeight = animatedHeight.interpolate({
  inputRange: [0, 100],
  outputRange: ['0%', '100%'],
});

module.exports = {
  OpenCardAnimation,
  CloseCardAnimation,
  interpolatedHeight,
  interpolatedIcon,
  animationDuration,
};
