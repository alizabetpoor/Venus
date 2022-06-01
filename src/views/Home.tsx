import {View, Text, FlatList} from 'react-native';
import React, {useState, createRef} from 'react';
import Styles from './Home.style.js';
import SearchInput from '../components/searchInput/SearchInput';
import Card from '../components/card/Card';
import {connect} from 'react-redux';
import {getUsersThunk} from '../services/ApiService';
import {getAppData, setAppData} from '../utils/AsyncStorage';
import {useEffect} from 'react';
import {useContext} from 'react';
import {ThemeContext} from '../themes/ThemeProvider.js';
import {refetchUsers} from '../store/reducer/getUsersReducer';
import {ActivityIndicator} from 'react-native';

type testProps = {
  getUsers: (usersNumber: number) => void;
  loading: boolean;
  users: [];
  refetch: () => void;
  searchResults: any[];
};

const Home: FC = ({getUsers, loading, users, searchResults}: testProps) => {
  const [fetch, setFetch] = useState(0);
  const [openCardId, setOpenCardId] = useState('');
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
  const toggleOff = uuid => {
    setOpenCardId(uuid);
  };
  useEffect(() => {
    setAppData({theme: mainTheme});
  }, [mainTheme]);

  useEffect(() => {
    function firstRender() {
      getUsers();
    }
    firstRender();
  }, [fetch]);
  console.log('render', loading, users?.length);

  return (
    <View style={[Styles.layout, {backgroundColor: theme.colors.background_2}]}>
      <View />
      <SearchInput />
      <View>
        <Text style={[Styles.title, {color: theme.colors.text}]}>Users</Text>
      </View>
      <View>
        {loading === true && users?.length === 0 && fetch === 0 ? (
          <ActivityIndicator />
        ) : (
          <>
            <FlatList
              data={searchResults?.length > 0 ? searchResults : users}
              renderItem={obj => (
                <Card
                  userDetail={obj.item}
                  isActive={openCardId == obj.item.login.uuid ? true : false}
                  {...obj}
                  toggleOff={toggleOff}
                />
              )}
              contentContainerStyle={{paddingBottom: 150}}
              onEndReached={() => setFetch((state: number) => state + 1)}
              keyExtractor={(item: any) => item.login.uuid}
              extraData={openCardId}
            />
            {searchResults?.length > 0 ? <></> : <ActivityIndicator />}
          </>
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
    loading: state.user.loading,
    users: state.user.users,
    searchResults: state.searchInput.searchResults,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
