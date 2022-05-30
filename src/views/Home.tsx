import {View, Text} from 'react-native';
import React from 'react';
import Styles from './Home.style.js';
import SearchInput from '../components/searchInput/SearchInput';
import Card from '../components/card/Card';
import {useContext} from 'react';
import {ThemeContext} from '../themes/ThemeProvider.js';

const Home: React.FC = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <View style={[Styles.layout, {backgroundColor: theme.colors.background_2}]}>
      <View />
      <SearchInput />
      <View>
        <Text style={[Styles.title, {color: theme.colors.text}]}>Users</Text>
      </View>
      <View>
        <Card />
        <Card />
      </View>
    </View>
  );
};

export default Home;
