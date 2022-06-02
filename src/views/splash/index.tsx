import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {styles} from './splash.styles.js';

const Splash = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/splash.json')}
        autoPlay
        loop={false}
        speed={1.3}
        onAnimationFinish={() => {
          navigation.navigate('Main');
        }}
      />
    </View>
  );
};

export default Splash;
