import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {ADD_POLL} from '../store/types';
import {Button, Card, TextInput, Title} from 'react-native-paper';
function AddPoll({navigation}) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);

  if (currentUser == null) {
    navigation.navigate('Login');
  }
  const users = useSelector(state => state.users);
  const [statement, setStatement] = useState('');
  const [options, setOptions] = useState([{name: ''}, {name: ''}]);
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      setDisabled(false);
      setMessage('');
    }, [statement, options]),
  );
  const addThisPoll = () => {
    if (statement == '') {
      setMessage('Please enter your Statement');
      return;
    }
    for (let opt of options) {
      if (opt.name == '' || opt.name == null) {
        setMessage('Please enter All of your options');
        return;
      } else setMessage(opt.name);
    }
    let newPoll = {
      statement: statement,
      options: options,
      creator: currentUser,
      votes: [],
    };
    let updatedUsers = users;
    updatedUsers[currentUser].createdPolls++;

    dispatch({
      type: ADD_POLL,
      poll: newPoll,
      users: updatedUsers,
    });
    console.log(newPoll, updatedUsers, 'ADD_Poll');
    let myOptions = options;
    myOptions = [{name: ''}, {name: ''}];
    setStatement('');
    setOptions([...myOptions]);
    setDisabled(true);
  };
  const setOption = (e, i) => {
    let myOptions = options;
    console.log(e);
    myOptions[i] = {name: e};
    setOptions([...myOptions]);
  };
  const addOption = () => {
    setOptions([...options, {name: ''}]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Card style={styles.statementInput}>
          <Title>About</Title>
          {/* <Box style={{display: 'flex'}}>
          <Text>New Poll</Text>
        </Box> */}
          <TextInput
            // type="text"
            // id="standard-full-width"
            label="Statement"
            // style={{margin: 'auto'}}
            // placeholder="Placeholder"           helperText="Add a statement for others"
            fullWidth
            // margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={statement}
            onChangeText={e => {
              setStatement(e);
            }}
          />
          {/* <Grid spacing={1}> */}
          {options.map((option, i) => {
            return (
              <View key={i} style={styles.optionInput}>
                <TextInput
                  label={'Option: ' + (i + 1)}
                  id="outlined-margin-normal"
                  // margin="normal"
                  // variant="outlined"
                  // placeholder={'Add Option'}
                  value={option.name}
                  onChangeText={e => setOption(e, i)}
                />
              </View>
            );
          })}
          <Button
            type="button"
            // color="secondary"
            title="Add Option"
            onPress={addOption}>
            Add Option
          </Button>
          {/* </Grid> */}
          <Button
            type="button"
            title="Add Poll"
            // color="primary"
            disabled={disabled}
            onPress={addThisPoll}>
            Add Poll
          </Button>
          <Text style={{color: 'red'}}>{message}</Text>
          <Text style={{color: 'green'}}>
            {disabled ? 'Successfully added poll' : ''}
          </Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  statementInput: {
    // alignItems: 'center',
    margin: 'auto',
    width: '100%',
  },
  optionInput: {
    paddingTop: 10,
    alignSelf: 'center',
    width: '80%',
  },
});

export default AddPoll;
