import React, {useState} from 'react';
import Home from './Screens/Home';
import Login from './Screens/Login';
import AddPoll from './Screens/AddPoll';
import Leaders from './Screens/Leaders';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useSelector} from 'react-redux';
import configStore from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const App = () => {
  const Stack = createStackNavigator();
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
function MyBottomTab() {
  const currentUser = useSelector(state => state.currentUser);
  const users = useSelector(state => state.users);
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Login"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Leaders"
        component={LeaderScreen}
        options={{
          tabBarLabel: 'Leaders',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="upload" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPoll}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Log out',
          tabBarVisible: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function HomeScreen() {
  const Stack = createStackNavigator();
  const currentUser = useSelector(state => state.currentUser);
  const users = useSelector(state => state.users);
  console.log(currentUser, 'from HomeScreen');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={
          currentUser != null ? users[currentUser].name + "'s Home" : 'Login'
        }
        component={currentUser != null ? Home : Login}
      />
    </Stack.Navigator>
  );
}
function LeaderScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Leader Board" component={Leaders} />
    </Stack.Navigator>
  );
}

function LoginScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default App;
