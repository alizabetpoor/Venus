import React from 'react';
import {useContext} from 'react';
import {Pressable} from 'react-native';
import {View, TextInput, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../themes/ThemeProvider.js';
import styles from './SearchInput.style.js';

const SearchInput: React.FC = () => {
  const {themeToggle, dark, theme} = useContext(ThemeContext);

  const fatherIconConstructor = (
    name: string,
    size: number,
    color: string,
  ): React.ReactNode => {
    return <FeatherIcon name={name} size={size} color={color} />;
  };
  const searchIcon = fatherIconConstructor('search', 20, theme.colors.gray);
  const sunIcon = fatherIconConstructor('sun', 20, theme.colors.gray);
  const moonIcon = fatherIconConstructor('moon', 20, theme.colors.gray);

  return (
    <View style={styles.headerBox}>
      <View
        style={[
          styles.searchBox,
          {backgroundColor: theme.colors.background_1},
        ]}>
        <TextInput
          style={styles.searchText}
          placeholderTextColor={theme.colors.gray}
          placeholder="search users ..."
          maxLength={30}
        />
        <TouchableOpacity activeOpacity={0.6}>{searchIcon}</TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.themeButton,
          {backgroundColor: theme.colors.background_1},
        ]}>
        <Pressable onPress={() => themeToggle()}>
          {dark ? sunIcon : moonIcon}
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
