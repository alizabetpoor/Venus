import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './SearchInput.style.js';

const SearchInput = () => {
  const searchIcon = <FeatherIcon name="search" size={20} color="#777" />;
  const sunIcon = <FeatherIcon name="sun" size={20} color="#777" />;

  return (
    <View style={styles.headerBox}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchText}
          placeholder="search users ..."
          maxLength={30}
          // onChangeText={onChangeNumber}
          // keyboardType="numeric"
        />
        <TouchableOpacity activeOpacity={0.6}>{searchIcon}</TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.themeButton}>
        {sunIcon}
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
