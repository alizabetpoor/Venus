import React, {useContext} from 'react';
import {View, Text, Animated} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OctIcons from 'react-native-vector-icons/Octicons';
import styles from './CardDetail.style.js';
import {ThemeContext} from '../../themes/ThemeProvider';
import {AnimationContext} from './AnimationProvider.js';
const CardDetail: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const {interpolatedHeight} = useContext(AnimationContext);
  const phoneIcon = (
    <FeatherIcon name="phone" size={20} color={theme.colors.text_icon} />
  );
  const mailIcon = (
    <OctIcons name="mail" size={20} color={theme.colors.text_icon} />
  );
  const homeIcon = (
    <OctIcons name="home" size={20} color={theme.colors.text_icon} />
  );
    const animatedViewStyle = [styles.detail,
      {
        maxHeight: interpolatedHeight,
        borderTopColor: theme.colors.text_icon,
      },]
    const detailElementTextStyle = [styles.detailElementText, {color: theme.colors.text}]
    const homeTextStyle = [
      styles.detailElementText,
      {width:'80%'},
      {color: theme.colors.text},
    ]
  return (
    <Animated.View
      style={animatedViewStyle}>
      <View style={[styles.detailElement]}>
        {phoneIcon}
        <Text style={detailElementTextStyle}>
          01291 61297
        </Text>
      </View>
      <View style={[styles.detailElement]}>
        {mailIcon}
        <Text style={detailElementTextStyle}>
          julia.barnett@example.com
        </Text>
      </View>
      <View style={[styles.detailElement]}>
        {homeIcon}
        <Text
          style={homeTextStyle}>
          Park Road, 9754 Peterborough, Cambridgeshire Postcode: HI73 6GL
        </Text>
      </View>
    </Animated.View>
  );
};

export default CardDetail;
