import React, {useContext, useRef} from 'react'
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import styles from './Card.style.js';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {ThemeContext} from '../../themes/ThemeProvider.js';
import CardDetail from './detail';
import {AnimationContext} from './AnimationProvider.js';
import {cardInfoProps} from '../../utils/Types';

const Card: React.FC<cardInfoProps> = ({userDetail, index, isActive, toggleOff}) => {
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
                toggleOff('');
            }, animationDuration - 100);
        } else {
            // open dropdown
            OpenCardAnimation(animatedIcon, animatedHeight);
            toggleOff(userDetail.login.uuid);
        }
    };

    const evilIconConstructor = (
        name: string,
        size: number,
        color: string,
    ): React.ReactNode => <EvilIcon name={name} size={size} color={color}/>;

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
                    <Image
                        style={[styles.photo]}
                        resizeMode="contain"
                        source={{
                            uri: userDetail.picture.large,
                        }}
                    />
                    <View style={[styles.userinfo]}>
                        <Text style={[styles.name, {color: theme.colors.text}]}>
                            {userDetail.name.first + ' ' + userDetail.name.last}{' '}
                        </Text>
                        <Text style={[styles.username, {color: theme.colors.text}]}>
                            @{userDetail.login.username}
                        </Text>
                    </View>
                </View>
                <View style={[styles.rightContainer]}>
                    {locationIcon}
                    <Text style={[styles.country, {color: theme.colors.text_icon}]}>
                        {userDetail.location.country}
                    </Text>
                    {!isActive ? rightIcon : bottomIcon}
                </View>
            </TouchableOpacity>
            {isActive && (
                <CardDetail userDetail={userDetail} animatedHeight={animatedHeight}/>
            )}
        </View>
    );
};

export default Card;
