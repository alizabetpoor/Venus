import React from 'react';
import {Text, View} from 'react-native';

type LableProps = {
  text?: string;
  textStyle?: any;
  icon?: any;
  iconStyle?: any;
  textWrapperStyle?: any;
  iconWrapperStyle?: any;
  lableStyle?: any;
  isIcon?: boolean;
  isText?: boolean;
};
const Lable = ({
  text,
  textStyle,
  icon,
  iconStyle,
  textWrapperStyle,
  iconWrapperStyle,
  lableStyle,
  isIcon,
  isText,
}: LableProps) => {
  return (
    <View style={lableStyle}>
      {isIcon && <View style={iconWrapperStyle}>{icon}</View>}
      {isText && (
        <View style={textWrapperStyle}>
          <Text style={textStyle}>{text}</Text>
        </View>
      )}
    </View>
  );
};
export default Lable;
