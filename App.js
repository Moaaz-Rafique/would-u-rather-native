import React, {useState} from 'react';
import Home from './Screens/Home';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import configStore from "./store"; 
import { PersistGate } from "redux-persist/integration/react";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const App = () => {  
  
const Tab = createBottomTabNavigator();
const { store, persistor } = configStore();
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
          <Tab.Navigator initialRouteName="Login" 
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} 
              options={
                {
                  
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }
              }
            />
            <Tab.Screen name="Login" component={LoginScreen} 
              options={
                {
                  
                  tabBarLabel: 'Login',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="login" color={color} size={size} />
                  ),
                }
              }
            />
            <Tab.Screen name="Leaders" component={LeaderScreen} 
              options={
                {
                  
                  tabBarLabel: 'Leaders',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="login" color={color} size={size} />
                  ),
                }
              }
            />
          </Tab.Navigator>
        </NavigationContainer>  
      </PaperProvider>
    </PersistGate>
  </Provider>
  );
}

function HomeScreen(){
  const Stack=createStackNavigator()
  return <Stack.Navigator>
      <Stack.Screen name="My Home" component={Home}/>
  </Stack.Navigator>
}
function LeaderScreen(){
  const Stack=createStackNavigator()
  return <Stack.Navigator>
      <Stack.Screen name="Leader Board" component={Home}/>
  </Stack.Navigator>
}

function LoginScreen(){
  const Stack=createStackNavigator()
  return <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
  </Stack.Navigator>
}
export default App;
