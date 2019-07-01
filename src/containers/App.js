import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import Welcome from '../components/Welcome/Welcome';
import TaskInput from '../components/TaskInput/TaskInput';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputField: '',
      name: 'Billy',
    }

  }

  render(){
    return (
      <div className="App">


        <Navigation />
        <div className="wrapper">
          <Welcome name={this.state.name}/>
          <Logo />
          <TaskInput />
        </div>

        {/*
        <SignIn />
        <Register />


        <Notes />
        <Topic /> //
        <Settings />
         */}
      </div>
    );
  }
}

export default App;
