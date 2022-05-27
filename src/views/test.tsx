import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getUsersThunk} from './../services/ApiService';

type testProps = {
  getUsers: (usersNumber: number) => void;
  loading: boolean;
  users: [];
};
const Test = ({getUsers, loading, users}: testProps) => {
  useEffect(() => {
    getUsers(1);
  }, []);
  console.log('users', users);

  return (
    <SafeAreaView>
      <View>{loading ? <Text>Loading...</Text> : <Text>hi</Text>}</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);
