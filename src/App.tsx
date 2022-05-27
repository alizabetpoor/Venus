import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/Store';
import Test from './views/test';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          <Text>Hello</Text>
          <Test />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
