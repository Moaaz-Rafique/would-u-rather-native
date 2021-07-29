import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

function About({navigation}){
   
    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
            <Text>About</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#FFF",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });

export default About;