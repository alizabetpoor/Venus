import {Animated} from 'react-native';
import React from 'react';
const AnimationContext = React.createContext();
const AnimationProvider = ({children}) => {
  const animationDuration = 400;
  const CloseCardAnimation = (animatedIcon, animatedHeight) => {
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

  const OpenCardAnimation = (animatedIcon, animatedHeight) => {
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

  return (
    <AnimationContext.Provider
      value={{
        OpenCardAnimation,
        CloseCardAnimation,
        animationDuration,
      }}>
      {children}
    </AnimationContext.Provider>
  );
};

export {AnimationProvider, AnimationContext};
