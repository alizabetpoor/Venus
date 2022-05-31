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


type testProps = {
    getUsers: (usersNumber: number) => void;
    loading: boolean;
    users: [];
};

const Home: FC = ({getUsers, loading, users}: testProps) => {
    const [mainTheme, setMainTheme] = useState('');
    const {theme} = useContext(ThemeContext);
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
        getUsers(15);
    }, []);


    return (
    <View style={[Styles.layout, {backgroundColor: theme.colors.background_2}]}>
      <View />
            <SearchInput />
            <View>
        <Text style={[Styles.title, {color: theme.colors.text}]}>Users</Text>
            </View>
            <View>
                {!loading && (
                    <FlatList
                        data={users.results}
                        renderItem={obj => <Card userDetail={obj.item} />}
                        contentContainerStyle={{paddingBottom: 200}}
                        keyExtractor={(item: any, key: number) => key}
                    />
                )}
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
