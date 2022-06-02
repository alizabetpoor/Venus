import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useContext, useMemo} from 'react';
import Styles from './Home.style.js';
import SearchInput from '../../components/searchInput';
import Card from '../../components/card';
import {connect} from 'react-redux';
import {getUsersThunk} from '../../services/ApiService';
import {getAppData, setAppData} from '../../utils/AsyncStorage';
import {ThemeContext} from '../../themes/ThemeProvider.js';
import {refetchUsers} from '../../store/reducer/getUsersReducer';
import {homeProps} from '../../utils/Types';

const Home: React.FC = ({
  getUsers,
  loading,
  users,
  searchResults,
  searchInput,
}: homeProps) => {
  const [fetch, setFetch] = useState(0);
  const [openCardId, setOpenCardId] = useState('');
  const [mainTheme, setMainTheme] = useState('');
  const {theme} = useContext(ThemeContext);

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
    function firstRender() {
      getUsers();
    }

    firstRender();
  }, [fetch]);
  const list = useMemo(() => {
    return (
      <FlatList
        data={
          searchInput === '' || searchInput === undefined
            ? users
            : searchResults
        }
        renderItem={obj => (
          <Card
            userDetail={obj.item}
            isActive={openCardId == obj.item.login.uuid ? true : false}
            {...obj}
            setOpenCardId={setOpenCardId}
          />
        )}
        contentContainerStyle={{paddingBottom: 170}}
        onEndReached={() => {
          if (searchResults.length == 0) {
            setFetch((state: number) => state + 1);
          }
        }}
        keyExtractor={(item: any) => item.login.uuid}
        extraData={openCardId}
        ListEmptyComponent={() =>
          !loading && (
            <View style={[Styles.emptyContainer]}>
              <Text style={[Styles.emptyText]}>No results found</Text>
            </View>
          )
        }
      />
    );
  }, [users, searchResults, openCardId, searchInput, loading]);

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
            <View>
              {list}
              {searchResults.length < 1 && searchInput === '' && (
                <ActivityIndicator />
              )}
            </View>
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
    searchInput: state.searchInput.searchInput,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
