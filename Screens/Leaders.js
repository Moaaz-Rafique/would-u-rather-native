import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import User from '../Components/User';
function Leaders({navigation}) {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Leaders</Text>
        {users
          ?.sort(
            (a, b) =>
              b.answeredPolls +
              b.createdPolls -
              (a.answeredPolls + a.createdPolls),
          )
          .map((v, i) => {
            return (
              <User key={i} user={v}>
                {v?.name}
              </User>
            );
          })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
  },
  countContainer: {
    //   alignItems: "center",
    padding: 10,
    margin: 10,
  },
});

export default Leaders;
