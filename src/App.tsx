import {SafeAreaView, View} from 'react-native';
import Search from './components/search/Search';
import Card from './components/card/Card';
import React from 'react';

const App: React.FC = () => {
    return (
        <SafeAreaView>
            <View>
                <Search />
                <Card />
            </View>
        </SafeAreaView>
    );
};

export default App;
