import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button, TextInput,ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  render() {
    return (
      <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.textColor} >Welcome to React Native!</Text>
        <View style={styles.topDiv}>
        <Text>Nabersin</Text></View>
        <View style={styles.topDiv}>
        <Text>Nabersin</Text></View>
        <View style={styles.topDiv}>
        <Text>Nabersin</Text></View>
        <View style={styles.topDiv}>
        <Text>Nabersin</Text></View>
        <View style={styles.topDiv}>
        <Text>Nabersin</Text></View>
        <View style={styles.topDiv}>
        <Text>Nabersin</Text></View>
        <View style={styles.topDiv}>
        <Text>Nabersin</Text></View>
        <View style={styles.topDiv}>
        <Text>Nabersin</Text></View>
        <TextInput style={styles.input} placeholder="Submit here..."></TextInput>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textColor:{
    color:'black',
    marginTop: 70,
    marginLeft: 20,
  },
  topDiv: {
     
     backgroundColor: 'yellow',
     margin:'5%',
     borderRadius: 15,
     shadowOffset:{  width: 10,  height: 10,  },
     shadowColor: 'cyan',
     shadowOpacity: 1.0,
     height: 500
  },
  mainContainer:{
    flex:1,
    height: '100%',

    backgroundColor:'white'
  },
  input: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 20,
    textAlign: 'center'
  }
});
