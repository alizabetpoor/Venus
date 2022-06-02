import React, {useContext, useMemo, useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Pressable} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../themes/ThemeProvider.js';
import styles from './SearchInput.style.js';
import {
  setSearchInput,
  setSearchResults,
} from '../../store/reducer/searchInputReducer';
import {connect} from 'react-redux';

type Props = {
  setSearchValue: (value: string) => void;
  setSearchIsActive: (value: boolean) => void;
  setSearchResult: (searchResults: any) => void;
  users: any;
};
const SearchInput: React.FC = ({
  setSearchValue,
  setSearchIsActive,
  setSearchResult,
  users,
}: Props) => {
  const {themeToggle, dark, theme} = useContext(ThemeContext);

  const fatherIconConstructor = (
    name: string,
    size: number,
    color: string,
  ): React.ReactNode => {
    return <FeatherIcon name={name} size={size} color={color} />;
  };
  const [searchText, setSearchText] = useState('');
  const searchIcon = fatherIconConstructor('search', 20, theme.colors.gray);
  const sunIcon = fatherIconConstructor('sun', 20, theme.colors.gray);
  const moonIcon = fatherIconConstructor('moon', 20, theme.colors.gray);
  const filterUsers = useMemo(() => {
    if (searchText !== '') {
      const filteredUsers = users.filter(
        (user: any) =>
          user.name.first.includes(searchText) ||
          user.name.last.includes(searchText),
      );
      console.log(filteredUsers, 'filteredusers');

      return filteredUsers;
    } else {
      return [];
    }
  }, [users, searchText]);
  useEffect(() => {
    const newUsers = filterUsers;
    setSearchResult(newUsers);
  }, [searchText]);
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
          onChangeText={(searchInput: any) => {
            setSearchText(searchInput);
          }}
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
const mapStateToProps = (state: any) => {
  return {
    searchInput: state.searchInput.searchInput,
    users: state.user.users,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setSearchValue: (value: string) => {
      dispatch(setSearchInput(value));
    },
    setSearchIsActive: (value: boolean) => {
      dispatch(setSearchInput(value));
    },
    setSearchResult: (searchResults: any) =>
      dispatch(setSearchResults(searchResults)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
