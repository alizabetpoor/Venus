import {View, Text} from 'react-native';
import React, {useState, FC} from 'react';
import Styles from './Home.style.js';
import SearchInput from '../components/searchInput/SearchInput';
import Card from '../components/card/Card';

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);

  return (
    <View style={[Styles.layout]}>
      <View />
      <SearchInput />
      <View>
        <Text style={[Styles.title]}>Users</Text>
      </View>
      <View>
        <Card />
        <Card />
      </View>
    </View>
  );
};

export default Home;
