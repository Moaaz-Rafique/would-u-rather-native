import React from 'react';
import AddPoll from '../Screens/AddPoll';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

function AddPollScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddPoll" component={AddPoll} />
    </Stack.Navigator>
  );
}
export default AddPollScreen;
