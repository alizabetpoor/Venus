import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from './themes/ThemeProvider';
import {AnimationProvider} from './components/card/AnimationProvider';
import {Provider} from 'react-redux';
import store from './store/Store';
import {Platform, UIManager} from 'react-native';
import Home from './views/home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{flex: 1}}>
                <SafeAreaView>
                    <ThemeProvider>
                        <AnimationProvider>
                            <View>
                                <Home/>
                            </View>
                        </AnimationProvider>
                    </ThemeProvider>
                </SafeAreaView>
            </GestureHandlerRootView>
        </Provider>
    );
};

export default App;
