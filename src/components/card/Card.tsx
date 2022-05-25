import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import styles from './Card.style.js';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OctIcons from 'react-native-vector-icons/Octicons';
const Card: React.FC = () => {
  type children = {
    children: React.ReactNode;
  };
  const Animations = require('./Animation.ts');
  const locationIcon = <EvilIcon name="location" size={20} color="#BA28DE" />;
  const rightIcon = <EvilIcon name="chevron-right" size={30} color="#BA28DE" />;
  const phoneIcon = <FeatherIcon name="phone" size={20} color="#BA28DE" />;
  const mailIcon = <OctIcons name="mail" size={20} color="#BA28DE" />;
  const homeIcon = <OctIcons name="home" size={20} color="#BA28DE" />;
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleCard = (): void => {
    if (isActive == true) {
      //close dropdown
      Animations.CloseCardAnimation();
      setTimeout(() => {
        setIsActive(!isActive);
      }, Animations.animationDuration - 100);
    } else {
      // open dropdown
      setIsActive(!isActive);
      Animations.OpenCardAnimation();
    }
  };

  const CardDetail: React.ReactNode<children> = ({children}) => {
    return (
      <Animated.View
        style={[
          styles.detail,
          {
            maxHeight: Animations.interpolatedHeight,
          },
        ]}>
        {children}
      </Animated.View>
    );
  };
  return (
    <View style={[styles.card]}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.info]}
        onPress={() => toggleCard()}>
        <View style={[styles.leftContainer]}>
          <Image
            style={[styles.photo]}
            resizeMode="contain"
            source={{
              uri: 'https://cdn1.vectorstock.com/i/thumb-large/64/60/face-avatar-beautiful-woman-on-red-vector-31326460.jpg',
            }}
          />
          <View style={[styles.userinfo]}>
            <Text style={[styles.name]}>Julia Barnett</Text>
            <Text style={[styles.username]}>@goldenpanda611</Text>
          </View>
        </View>
        <View style={[styles.rightContainer]}>
          {locationIcon}
          <Text style={[styles.country]}>United Kingdom</Text>
          <Animated.View
            style={[{transform: [{rotate: Animations.interpolatedIcon}]}]}>
            {rightIcon}
          </Animated.View>
        </View>
      </TouchableOpacity>
      {isActive && (
        <CardDetail>
          <View style={[styles.detailElement]}>
            {phoneIcon}
            <Text style={[styles.detailElementText]}>01291 61297</Text>
          </View>
          <View style={[styles.detailElement]}>
            {mailIcon}
            <Text style={[styles.detailElementText]}>
              julia.barnett@example.com
            </Text>
          </View>
          <View style={[styles.detailElement]}>
            {homeIcon}
            <Text style={[styles.detailElementText, styles.homeText]}>
              Park Road, 9754 Peterborough, Cambridgeshire Postcode: HI73 6GL
            </Text>
          </View>
        </CardDetail>
      )}
    </View>
  );
};

export default Card;
