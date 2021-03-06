// ShatApp.js
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from './store';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ChatRoom from './screens/ChatRoom';
import styles from './ShatApp.styles';

export default class ShatApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="signIn" component={SignIn} title="Sign In" initial={true} />
            <Scene key="signUp" component={SignUp} title="Sign Up" />
            <Scene key="chatRoom" component={ChatRoom} title="Chat Room" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
