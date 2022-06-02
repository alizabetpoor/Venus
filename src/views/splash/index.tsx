import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

const Splash = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/splash.json')}
        autoPlay
        loop={false}
        speed={1.3}
        onAnimationFinish={() => {
          console.log('Animation Finished');
          navigation.navigate('Main');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 0,
  },
});

export default Splash;
