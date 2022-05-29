import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from './themes/ThemeProvider';
import React from 'react';
import {AnimationProvider} from './components/card/AnimationProvider';
import {Provider} from 'react-redux';
import store from './store/Store';
import {Platform, UIManager} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

import Home from './views/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView>
          <ThemeProvider>
            <AnimationProvider>
              <View>
                <Home />
              </View>
            </AnimationProvider>
          </ThemeProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
