import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Pressable} from 'react-native';
import {connect} from 'react-redux';
import {getUsersThunk} from '../services/ApiService';
import {getAppData, setAppData} from '../utils/AsyncStorage';

type testProps = {
  getUsers: (usersNumber: number) => void;
  loading: boolean;
  users: [];
};
const Test = ({getUsers, loading}: testProps) => {
  const [mainTheme, setMainTheme] = useState('');

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setMainTheme(data.theme);
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
    <SafeAreaView>
      <View>{loading ? <Text>Loading...</Text> : <Text>hi</Text>}</View>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          setMainTheme(mainTheme === 'light' ? 'dark' : 'light');
        }}>
        <Text>Press me</Text>
      </Pressable>
      <Text>{mainTheme}</Text>
    </SafeAreaView>
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

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: 'red',
    padding: 10,
    width: 100,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
