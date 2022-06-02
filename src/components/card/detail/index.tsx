import React, {useContext} from 'react';
import {Animated} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OctIcons from 'react-native-vector-icons/Octicons';
import styles from './CardDetail.style.js';
import {adrressConstructor} from '../../../utils/Constants';
import {ThemeContext} from '../../../themes/ThemeProvider';
import Label from '../../label';
import {cardDetailInfoProps} from '../../../utils/Types';

const CardDetail: React.FC<cardDetailInfoProps> = ({
  userDetail,
  animatedHeight,
}) => {
  const interpolatedHeight = animatedHeight.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });
  const {theme} = useContext(ThemeContext);
  // @ts-ignore
  const phoneIcon = (
    <FeatherIcon name="phone" size={20} color={theme.colors.text_icon} />
  );
  // @ts-ignore
  const mailIcon = (
    <OctIcons name="mail" size={20} color={theme.colors.text_icon} />
  );
  // @ts-ignore
  const homeIcon = (
    <OctIcons name="home" size={20} color={theme.colors.text_icon} />
  );
  const address: string = adrressConstructor(
    userDetail.location.street.name,
    userDetail.location.street.number,
    userDetail.location.city,
    userDetail.location.state,
    userDetail.location.postcode,
  );
  return (
    <Animated.View
      style={[
        styles.detail,
        {
          maxHeight: interpolatedHeight,
          borderTopColor: theme.colors.text_icon,
        },
      ]}>
      <Label
        labelStyle={[styles.detailElement]}
        textStyle={[styles.detailElementText, {color: theme.colors.text}]}
        icon={phoneIcon}
        isIcon
        isText
        text={userDetail.phone}
      />
      <Label
        labelStyle={[styles.detailElement]}
        textStyle={[styles.detailElementText, {color: theme.colors.text}]}
        icon={mailIcon}
        isIcon
        isText
        text={userDetail.email}
      />
      <Label
        labelStyle={[styles.detailElement]}
        textStyle={[
          styles.detailElementText,
          {width: '70%'},
          {color: theme.colors.text},
        ]}
        icon={homeIcon}
        isIcon
        isText
        text={address}
      />
    </Animated.View>
  );
};

export default CardDetail;
