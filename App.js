import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RightDrawerScreen from './src/config/router';
import {ThemeContext} from './src/utils/theme-context';
import {standard} from './src/constants';
import {Appearance} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const defaultTheme = Appearance.getColorScheme();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{theme: standard}}>
        <NavigationContainer>
          <RightDrawerScreen />
        </NavigationContainer>
      </ThemeContext.Provider>
    </Provider>
  );
}
