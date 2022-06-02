import React from 'react';
import {Text, View} from 'react-native';
import {LabelProps} from '../../utils/Types';

const Label = ({
  text,
  textStyle,
  icon,
  textWrapperStyle,
  iconWrapperStyle,
  labelStyle,
  isIcon,
  isText,
}: LabelProps) => {
  return (
    <View style={labelStyle}>
      {isIcon && <View style={iconWrapperStyle}>{icon}</View>}
      {isText && (
        <View style={textWrapperStyle}>
          <Text style={textStyle}>{text}</Text>
        </View>
      )}
    </View>
  );
};
export default Label;
