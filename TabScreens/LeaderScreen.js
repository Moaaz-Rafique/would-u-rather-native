import React from 'react';
import Leaders from '../Screens/Leaders';
import {createStackNavigator} from '@react-navigation/stack';

function LeadersScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Leaders" component={Leaders} />
    </Stack.Navigator>
  );
}
export default LeadersScreen;
