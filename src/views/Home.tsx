import {View, Text} from 'react-native';
import React, {useState, FC} from 'react';
import Styles from './Home.style.js';
import SearchInput from '../components/searchInput/SearchInput';
import Card from '../components/card/Card';
import {connect} from 'react-redux';
import {getUsersThunk} from '../services/ApiService.js';
import {getAppData, setAppData} from '../utils/AsyncStorage.js';
import {useEffect} from 'react';

type testProps = {
  getUsers: (usersNumber: number) => void;
  loading: boolean;
  users: [];
};

const Home: React.FC = ({getUsers, loading, users}: testProps) => {
  const [mainTheme, setMainTheme] = React.useState('');
  React.useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setMainTheme(data.theme);
        console.log('data from storage', data);
      }
    };
    getDataFromStorage();
  }, []);

  useEffect(() => {
    setAppData({theme: mainTheme});
  }, [mainTheme]);

  useEffect(() => {
    getUsers(1);
  }, []);

  return (
    <View style={[Styles.layout]}>
      <View style={[Styles.line]}></View>
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

const mapDispatchToProps = dispatch => {
  return {
    getUsers: (usersNumber: number) => {
      dispatch(getUsersThunk(usersNumber));
    },
  };
};
const mapStateToProps = state => {
  return {
    loading: state.loading,
    users: state.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
