import React, {useContext, useRef, memo} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from './Card.style.js';
import {ThemeContext} from '../../themes/ThemeProvider.js';
import CardDetail from './detail';
import {AnimationContext} from './AnimationProvider.js';
import {cardInfoProps} from '../../utils/Types';
import Label from '../label';
import CustomImage from '../image';
import {evilIconConstructor, fullNameConstructor} from '../../utils/Constants';
const Card: React.FC<cardInfoProps> = ({
  userDetail,
  index,
  isActive,
  setOpenCardId,
}) => {
  const {OpenCardAnimation, CloseCardAnimation, animationDuration} =
    useContext(AnimationContext);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedIcon = useRef(new Animated.Value(0)).current;
  const {theme} = useContext(ThemeContext);

  const toggleCard = (): void => {
    if (isActive == true) {
      //close dropdown
      CloseCardAnimation(animatedIcon, animatedHeight);
      setTimeout(() => {
        setOpenCardId('');
      }, animationDuration - 100);
    } else {
      // open dropdown
      OpenCardAnimation(animatedIcon, animatedHeight);
      setOpenCardId(userDetail.login.uuid);
    }
  };

  const locationIcon = evilIconConstructor(
    'location',
    20,
    theme.colors.text_icon,
  );
  const bottomIcon = evilIconConstructor(
    'chevron-down',
    30,
    theme.colors.text_icon,
  );
  const rightIcon = evilIconConstructor(
    'chevron-right',
    30,
    theme.colors.text_icon,
  );
  return (
    <View
      key={index}
      style={[styles.card, {backgroundColor: theme.colors.background_1}]}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.info]}
        onPress={() => toggleCard()}>
        <View style={[styles.leftContainer]}>
          <CustomImage
            styles={[styles.photo]}
            source={userDetail.picture.large}
          />

          <View style={[styles.userinfo]}>
            <Label
              isText
              text={fullNameConstructor(
                userDetail.name.first,
                userDetail.name.last,
              )}
              textStyle={[styles.name, {color: theme.colors.text}]}
            />
            <Label
              isText
              text={`@${userDetail.login.username}`}
              textStyle={[styles.username, {color: theme.colors.text}]}
            />
          </View>
        </View>
        <View style={[styles.rightContainer]}>
          <Label isIcon icon={locationIcon} />
          <Text></Text>
          <Label
            text={userDetail.location.country}
            isText
            textStyle={[styles.country, {color: theme.colors.text_icon}]}
          />
          <Label isIcon icon={!isActive ? rightIcon : bottomIcon} />
        </View>
      </TouchableOpacity>
      {isActive && (
        <CardDetail userDetail={userDetail} animatedHeight={animatedHeight} />
      )}
    </View>
  );
};

export default memo(Card);
