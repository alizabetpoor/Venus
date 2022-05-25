import React from 'react';
import {View, Image} from 'react-native';
import styles from './ImageComponent.style.js';

const ImageComponet: React.FC = ({source, styles}) => {
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

export default ImageComponet;
