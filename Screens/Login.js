import React,{useEffect} from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import {useSelector,useDispatch} from 'react-redux'
import User from '../Components/User';
import { SET_USER } from '../store/types';
function Home({navigation}){
    const users=useSelector(state=>state.users);
    const currentUser=useSelector(state=>state);
    const dispatch=useDispatch()
    const setUser = (user) => {
        dispatch({ type: SET_USER, user: user });
        console.log(user,'user set from login');        
        navigation.navigate('Home')
      };
      useEffect(()=>{
        if(currentUser!=null){
          dispatch({ type: "LOGIN" });
          console.log(currentUser,'user set null login');
        }
      },[])
    return (
        <ScrollView style={styles.container}>
            <View style={styles.countContainer}>
            <Text>Login</Text>
            {users?.map((v,i)=>{
                return <User onPress={() => {

                    setUser(i)

                }} key={i} user={v}>{v?.name}</User>
            
            })}
            
            <Button 
                theme={{ roundness: 3 }}
            >
                Go to About
            </Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#FFF",
      padding: 10
    },
    countContainer: {
    //   alignItems: "center",
      padding: 10,
      margin: 10
    }
  });

export default Home;