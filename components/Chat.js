import React, {Component} from 'react'
import {Platform,Text, View,Button, TextInput,ScrollView} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import styles from '../styles'

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/e1fc9d21-95df-426a-87e1-462a9266a022/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:e1fc9d21-95df-426a-87e1-462a9266a022';
const CHATKIT_ROOM_ID = '19379252';
const CHATKIT_USER_NAME = 'CoolDeveloper';
const CHATKIT_USER_NAME2 = 'Beyza';

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
            messages: []
        }
    }
    componentDidMount() {
        const tokenProvider = new TokenProvider({
          url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
        });
    
        const chatManager = new ChatManager({
          instanceLocator: CHATKIT_INSTANCE_LOCATOR,
          userId: CHATKIT_USER_NAME2,
          tokenProvider: tokenProvider,
        });
    
        chatManager
          .connect()
          .then(currentUser => {
            this.currentUser = currentUser;
            this.currentUser.subscribeToRoom({
              roomId: CHATKIT_ROOM_ID,
              hooks: {
                onMessage: this.onReceive,
              },
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
      onReceive = data => {
        const { id, senderId, text, createdAt } = data;
        const incomingMessage = {
          _id: id,
          text: text,
          createdAt: new Date(createdAt),
          user: {
            _id: senderId,
            name: senderId,
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA',
          },
        };
    
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, incomingMessage),
        }));
      };
    // onSend(messages = []) {
    //     this.setState(previousState => ({
    //       messages: GiftedChat.append(previousState.messages, messages),
    //     }))
    //   }
    onSend = (messages = []) => {
        messages.forEach(message => {
          this.currentUser
            .sendMessage({
              text: message.text,
              roomId: CHATKIT_ROOM_ID,
            })
            .then(() => {})
            .catch(err => {
              console.log(err);
            });
        });
      };
    render() {
      return (
        
        <View style={styles.mainContainer}>
        
         <GiftedChat style={styles.chatDiv}
         renderAvatarOnTop = {true}
         bottomOffset= {300}
         placeholder={'Please type your message here..'}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: CHATKIT_USER_NAME2,
        }}
      />
        </View>
        
      );
    }
  }
  
  