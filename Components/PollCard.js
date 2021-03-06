import React, {useState} from 'react';

import {
  Card,
  Button,
  RadioButton,
  Collapse,
  Title,
  Paragraph,
} from 'react-native-paper';
import {Text, View, StyleSheet} from 'react-native';
import ProgressBar from './ProgressBar';

function PollCard({poll, submitVote, index, deletePoll, currentUser, users}) {
  const {statement, options, votes, creator} = poll;
  const [selectedOption, setSelectedOption] = useState(0);

  const [hoveredOption, setHoveredOption] = useState(-1);
  //   const onChangeValue = (e) => {
  //     setSelectedOption(e.target.value);
  //   };

  let noOfVotes = votes.length;
  const optionVotes = [];
  let voted = false;
  let myVote;
  for (let i in options) {
    let temp = 0;
    for (let j of votes) {
      if (i == j.option) {
        temp++;
      }
      if (currentUser === j.user && !voted) {
        voted = true;
        myVote = options[j.option];
      }
    }
    optionVotes.push(temp);
  }
  return (
    <Card style={{padding: 20, margin: 10}}>
      <Title variant="h5">{statement}</Title>
      <Paragraph>Votes: {noOfVotes}</Paragraph>

      <RadioButton.Group
        onValueChange={newValue => setSelectedOption(newValue)}
        value={selectedOption}>
        {options.map((opt, index) => {
          return (
            <View style={styles.radioBtnContainer} key={index}>
              {!voted ? (
                <>
                  <RadioButton value={index} color="green" />
                  <Text>{opt.name}</Text>
                </>
              ) : (
                <ProgressBar
                  completed={(optionVotes[index] / noOfVotes) * 100}
                  bgcolor={
                    myVote?.name == opt.name
                      ? 'rgba(70,200,100,1)'
                      : 'rgba(255,100,100,1)'
                  }
                  label={opt.name}
                />
              )}
            </View>
          );
        })}
      </RadioButton.Group>

      {/* {deletePoll ? (
            <Button
            onPress={(index) => {
                deletePoll(index, selectedOption);
            }}
            >
            Delete Poll
            </Button>
        ) : (
            <Text></Text>
        )} */}

      {!voted ? (
        <Button
          onPress={() => {
            submitVote(index, selectedOption);
          }}>
          Submit Vote
        </Button>
      ) : null}
      <Paragraph>Poll by: {users[creator].name}</Paragraph>
    </Card>
  );
}
const styles = StyleSheet.create({
  radioBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
export default PollCard;
