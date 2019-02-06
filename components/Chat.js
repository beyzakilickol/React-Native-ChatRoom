import React, {Component} from 'react'
import {Platform,Text, View,Button, TextInput,ScrollView} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import styles from '../styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            messsage: ['heyo']
        }
    }
    onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
    render() {
      return (
        
        <View style={styles.mainContainer}>
        
         <GiftedChat
        messages={this.state.message}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
        </View>
        
      );
    }
  }
  
  