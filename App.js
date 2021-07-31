import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyBottomTab from './TabScreens/MyBottomTab';
import {Provider} from 'react-redux';
import configStore from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
const App = () => {
  const {store, persistor} = configStore();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <MyBottomTab />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
