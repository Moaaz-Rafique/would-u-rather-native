import React from 'react';
import Home from '../Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
function HomeScreen() {
  const Stack = createStackNavigator();
  const currentUser = useSelector(state => state.currentUser);
  const users = useSelector(state => state.users);
  console.log(currentUser, 'from HomeScreen');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={
          //   'My Home'
          currentUser != null ? users[currentUser].name + "'s Home" : 'My Home'
        }
        component={Home}
      />
    </Stack.Navigator>
  );
}
export default HomeScreen;
