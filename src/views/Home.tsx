import {View, Text, FlatList} from 'react-native';
import React, {useState, FC} from 'react';
import Styles from './Home.style.js';
import SearchInput from '../components/searchInput/SearchInput';
import Card from '../components/card/Card';
import {connect} from 'react-redux';
import {getUsersThunk} from '../services/ApiService';
import {getAppData, setAppData} from '../utils/AsyncStorage';
import {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useContext} from 'react';
import {ThemeContext} from '../themes/ThemeProvider.js';
import {refetchUsers} from '../store/reducer/getUsersReducer';
import {useCallback} from 'react';
import {useMemo} from 'react';
import {ActivityIndicator} from 'react-native';

type testProps = {
  getUsers: (usersNumber: number) => void;
  loading: boolean;
  users: [];
  refetch: () => void;
};
type refetchHookTypes = {
  refetchFunction: () => void;
  dependencies: any[];
};
const useRefetchHook = ({refetchFunction, dependencies}: refetchHookTypes) => {
  return useEffect(() => {
    refetchFunction();
  }, [dependencies, refetchFunction]);
};

const Home: FC = ({getUsers, loading, users, refetch}: testProps) => {
  const [fetch, setFetch] = useState(0);
  const [oldUsers, setOldUsers] = useState([]);
  const [mainTheme, setMainTheme] = useState('');
  const {theme} = useContext(ThemeContext);
  React.useEffect(() => {
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
    function firstRender() {
      getUsers();
      console.log('first render', users.length, fetch);
    }
    firstRender();
  }, [fetch]);
  return (
    <View style={[Styles.layout, {backgroundColor: theme.colors.background_2}]}>
      <View />
      <SearchInput />
      <View>
        <Text style={[Styles.title, {color: theme.colors.text}]}>Users</Text>
      </View>
      <View>
        {!loading ? (
          <FlatList
            data={users}
            renderItem={obj => <Card userDetail={obj.item} />}
            contentContainerStyle={{paddingBottom: 200}}
            keyExtractor={(item: any, key: number) => key}
            onEndReached={() => setFetch((state: number) => state + 1)}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsersThunk());
    },
    refetch: () => {
      dispatch(refetchUsers());
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
