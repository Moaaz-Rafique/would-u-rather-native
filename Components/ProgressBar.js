import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ProgressBar = props => {
  const {bgcolor, completed, label} = props;

  const styles = StyleSheet.create({
    container: {
      height: 35,
      width: '100%',
      marginLeft: -10,
      margin: 5,
      backgroundColor: '#d5d5d5',
      borderRadius: 50,
    },

    fillerStyles: {
      //   height: '10px',
      width: completed <= 0 ? '100%' : completed + '%',
      borderRadius: 50,
      padding: 3,
      backgroundColor: completed <= 0 ? 'rgba(0,0,0,0)' : bgcolor,
      borderWidth: 1.4,
      borderColor: '#fff',
      borderStyle: 'solid',
    },

    labelStyles: {
      textAlign: 'left',
      paddingLeft: 20,
      marginTop: -2,
      padding: 5,
      opacity: 1,
      color: completed <= 0 ? 'black' : 'white',
      //   fontWeight: 'bold',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.fillerStyles}>
        <Text style={styles.labelStyles}>{label}</Text>
      </View>
    </View>
  );
};
export default ProgressBar;
