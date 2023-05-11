import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      education: [
        
      ],
      experience: [
        
      ]
    }
  }

  render() {
    return (<></>)
  }
}

export default App;
