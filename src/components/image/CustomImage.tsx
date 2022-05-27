import React from 'react';
import {View, Image} from 'react-native';
import styles from './CustomImage.style.js';

const CustomImage: React.FC = ({source, styles}) => {
  return (
    <View>
      <Image
        style={[styles.picture, styles]}
        resizeMode="contain"
        source={{uri: `${source}`}}
      />
    </View>
  );
};

export default CustomImage;
