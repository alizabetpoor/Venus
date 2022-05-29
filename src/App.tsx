import {SafeAreaView, View, Text} from 'react-native';
import {ThemeProvider} from './themes/ThemeProvider';
import React from 'react';
import Card from './components/card/Card';
import {AnimationProvider} from './components/card/AnimationProvider';
import {Provider} from 'react-redux';
import store from './store/Store';
import Test from './views/test';

import Home from './views/Home';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ThemeProvider>
          <AnimationProvider>
            <View>
              <Home />
            </View>
          </AnimationProvider>
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
