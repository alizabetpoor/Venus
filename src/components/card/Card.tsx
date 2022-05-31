import React, {useState, useContext} from 'react';

import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import styles from './Card.style.js';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {ThemeContext} from '../../themes/ThemeProvider.js';
import CardDetail from './CardDetail';
import {AnimationContext} from './AnimationProvider.js';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedGestureHandler,
  withTiming,
} from 'react-native-reanimated';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

type cardInfoProps = {
  userDetail: {
    [key: string]: any;
  };
};

const Card: React.FC<cardInfoProps> = ({userDetail}) => {
  const {
    interpolatedIcon,
    OpenCardAnimation,
    CloseCardAnimation,
    animationDuration,
  } = useContext(AnimationContext);

  const [isActive, setIsActive] = useState<boolean>(false);
  const {theme} = useContext(ThemeContext);

  const toggleCard = (): void => {
    console.log('toggleCard', isActive, animationDuration - 100);

    setTimeout(async () => {
      await setIsActive((state: boolean) => !state);
      isActive && (await CloseCardAnimation());
      !isActive && (await OpenCardAnimation());
      console.log('setTimeOut', isActive);
    }, 500);
  };
  const evilIconConstructor = (
    name: string,
    size: number,
    color: string,
  ): React.ReactNode => {
    return <EvilIcon name={name} size={size} color={color} />;
  };
  const locationIcon = evilIconConstructor(
    'location',
    20,
    theme.colors.text_icon,
  );
  const rightIcon = evilIconConstructor(
    'chevron-right',
    30,
    theme.colors.text_icon,
  );
  const offset = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {shouldShowExtraDetail: boolean}
  >(
    {
      onActive: (event, ctx) => {
        const xVal = Math.floor(event.translationX);
        offset.value = xVal;

        // use Absolute value so the user could swipe either left or right
        if (Math.abs(xVal) <= 40) {
          ctx.shouldShowExtraDetail = false;
        } else {
          ctx.shouldShowExtraDetail = true;
        }
      },
      onEnd: (_, ctx) => {
        if (ctx.shouldShowExtraDetail) {
          // if the item should be removed, animate it off the screen first
          offset.value = withTiming(0);
          console.log('should show extra detail');
          runOnJS(toggleCard)();
          // then trigger the remove mood item with a small delay
        } else {
          // otherwise, animate the item back to the start
          offset.value = withTiming(0);
        }
      },
    },
    [],
  );

  return (
    <PanGestureHandler
      minDeltaX={1}
      minDeltaY={100}
      onGestureEvent={onGestureEvent}>
      <Reanimated.View
        style={[
          styles.card,
          {backgroundColor: theme.colors.background_1},
          animatedStyle,
        ]}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.info]}
          onPress={() => toggleCard()}>
          <View style={[styles.leftContainer]}>
            <Image
              style={[styles.photo]}
              resizeMode="contain"
              source={{
                uri: userDetail.picture.large,
              }}
            />
            <View style={[styles.userinfo]}>
              <Text style={[styles.name, {color: theme.colors.text}]}>
                {userDetail.first + ' ' + userDetail.last}
              </Text>
              <Text style={[styles.username, {color: theme.colors.text}]}>
                {userDetail.login.username}
              </Text>
            </View>
          </View>
          <View style={[styles.rightContainer]}>
            {locationIcon}
            <Text style={[styles.country, {color: theme.colors.text_icon}]}>
              {userDetail.location.country}
            </Text>
            <Animated.View style={[{transform: [{rotate: interpolatedIcon}]}]}>
              {rightIcon}
            </Animated.View>
          </View>
        </TouchableOpacity>
        {isActive && <CardDetail userDetail={userDetail} />}
      </Reanimated.View>
    </PanGestureHandler>
  );
};

export default Card;
