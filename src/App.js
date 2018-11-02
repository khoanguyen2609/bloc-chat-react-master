import React, { Component } from 'react';
import * as firebase from 'firebase'
import RoomList from './component/RoomList.js';
import './App.css';




  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBasKm1DfFkjbMblrak3L6FRbqsPkVMKOk",
  authDomain: "bloc-chat-react-557b3.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-557b3.firebaseio.com",
  projectId: "bloc-chat-react-557b3",
  storageBucket: "bloc-chat-react-557b3.appspot.com",
  messagingSenderId: "892414079904"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return(
      <div>
        <RoomList firebase={firebase} />
      </div>
    )
  }
}

export default App;
