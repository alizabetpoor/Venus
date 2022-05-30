import React from 'react';
import {useContext} from 'react';
import {Pressable} from 'react-native';
import {View, TextInput, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../themes/ThemeProvider.js';
import styles from './SearchInput.style.js';

const SearchInput = () => {
  const {themeToggle, dark} = useContext(ThemeContext);
  const searchIcon = <FeatherIcon name="search" size={20} color="#aaa" />;
  const sunIcon = <FeatherIcon name="sun" size={20} color="#aaa" />;
  const moonIcon = <FeatherIcon name="moon" size={20} color="#aaa" />;

  return (
    <View style={styles.headerBox}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchText}
          placeholder="search users ..."
          maxLength={30}
        />
        <TouchableOpacity activeOpacity={0.6}>{searchIcon}</TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.themeButton}>
        <Pressable style={styles.pressable} onPress={() => themeToggle()}>
          {dark ? sunIcon : moonIcon}
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
