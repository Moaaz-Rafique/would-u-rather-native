import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddPollScreen from './AddPollScreen';
import LeaderScreen from './LeaderScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
function MyBottomTab() {
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
        component={AddPollScreen}
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
export default MyBottomTab;
