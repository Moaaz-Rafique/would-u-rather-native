import React from 'react';
import Login from '../Screens/Login';
import {createStackNavigator} from '@react-navigation/stack';

function LoginScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
export default LoginScreen;
