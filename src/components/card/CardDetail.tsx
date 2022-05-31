import React, {useContext} from 'react';
import {View, Text, Animated} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OctIcons from 'react-native-vector-icons/Octicons';
import styles from './CardDetail.style.js';
import {ThemeContext} from '../../themes/ThemeProvider';
import {AnimationContext} from './AnimationProvider.js';
type detailInfoProps = {
  userDetail: {
    [key: string]: any;
  };
  animatedHeight: any;
};
const CardDetail: React.FC<detailInfoProps> = ({
  userDetail,
  animatedHeight,
}) => {
  const interpolatedHeight = animatedHeight.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });
  const {theme} = useContext(ThemeContext);
  // const {interpolatedHeight} = useContext(AnimationContext);
  const phoneIcon = (
    <FeatherIcon name="phone" size={20} color={theme.colors.text_icon} />
  );
  const mailIcon = (
    <OctIcons name="mail" size={20} color={theme.colors.text_icon} />
  );
  const homeIcon = (
    <OctIcons name="home" size={20} color={theme.colors.text_icon} />
  );
  const address: string = `${userDetail.location.street.name},\
   ${userDetail.location.street.number}\
   ${userDetail.location.city},${userDetail.location.state}\
    postcode: ${userDetail.location.postcode}`;
  return (
    <Animated.View
      style={[
        styles.detail,
        {
          maxHeight: interpolatedHeight,
          borderTopColor: theme.colors.text_icon,
        },
      ]}>
      <View style={[styles.detailElement]}>
        {phoneIcon}
        <Text style={[styles.detailElementText, {color: theme.colors.text}]}>
          {userDetail.phone}
        </Text>
      </View>
      <View style={[styles.detailElement]}>
        {mailIcon}
        <Text style={[styles.detailElementText, {color: theme.colors.text}]}>
          {userDetail.email}
        </Text>
      </View>
      <View style={[styles.detailElement]}>
        {homeIcon}
        <Text
          style={[
            styles.detailElementText,
            styles.homeText,
            {color: theme.colors.text},
          ]}>
          {address}
        </Text>
      </View>
    </Animated.View>
  );
};

export default CardDetail;
