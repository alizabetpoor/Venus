import React, {useContext} from 'react';
import {View, Text, Animated} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OctIcons from 'react-native-vector-icons/Octicons';
import styles from './CardDetail.style.js';
import {ThemeContext} from '../../../themes/ThemeProvider';
import {cardDetailInfoProps} from '../../../utils/Types';

const CardDetail: React.FC<cardDetailInfoProps> = ({userDetail, animatedHeight}) => {
    const interpolatedHeight = animatedHeight.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });
    const {theme} = useContext(ThemeContext);
    // @ts-ignore
    const phoneIcon = <FeatherIcon name="phone" size={20} color={theme.colors.text_icon}/>
    // @ts-ignore
    const mailIcon = <OctIcons name="mail" size={20} color={theme.colors.text_icon}/>
    // @ts-ignore
    const homeIcon = <OctIcons name="home" size={20} color={theme.colors.text_icon}/>
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
