import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {SET_USER, ADD_VOTE} from '../store/types';
import PollCard from '../Components/PollCard.js';

function Home({navigation}) {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const polls = useSelector(state => state.polls);
  useFocusEffect(
    React.useCallback(() => {
      if (currentUser == null) {
        navigation.navigate('Login');
      } else {
        dispatch({type: SET_USER, user: currentUser});
        console.log(currentUser, 'from Usefocus Home');
      }
    }, []),
  );
  const submitVote = (key, selectedOption) => {
    for (let i of polls[key].votes) {
      if (i.user === currentUser) {
        console.log(polls[key].votes, currentUser);
        alert('Already voted');
        return;
      }
    }
    const newVote = {
      option: selectedOption,
      user: currentUser,
    };
    const newUsers = users;
    newUsers[currentUser].answeredPolls++;
    const newPolls = polls;
    newPolls[key] = {
      ...newPolls[key],
      votes: [...newPolls[key].votes, newVote],
    };
    console.log(newVote);
    dispatch({type: ADD_VOTE, polls: newPolls, users: newUsers});
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.countContainer}>
        {polls.map((poll, i) => {
          return (
            <PollCard
              key={i}
              index={i}
              poll={poll}
              submitVote={submitVote}
              currentUser={currentUser}
              users={users}
            />
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

export default Home;
