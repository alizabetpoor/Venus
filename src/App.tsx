import {SafeAreaView} from 'react-native';
import {ThemeProvider} from './themes/ThemeProvider';
import React from 'react';
import Card from './components/card/Card';
import {AnimationProvider} from './components/card/AnimationProvider';

const App: React.FC = () => {
    return (
        <SafeAreaView>
            <ThemeProvider>
                <AnimationProvider>
                    <Card/>
                </AnimationProvider>
            </ThemeProvider>
        </SafeAreaView>
    );
};

export default App;
