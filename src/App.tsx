import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from './themes/ThemeProvider';
import React from 'react';
import {AnimationProvider} from './components/card/AnimationProvider';
import {Provider} from 'react-redux';
import store from './store/Store';

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
