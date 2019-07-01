import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import Welcome from '../components/Welcome/Welcome';
import TaskInput from '../components/TaskInput/TaskInput';
import Notes from '../components/Notes/Notes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputField: '',
      name: 'Billy',
      list: ['milk'],
    }

  }

  onAddClick = (event) => {
    console.log(event.target.value);
    console.log(this.state.list[0]);

  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Welcome name={this.state.name}/>
        <Logo />
        <div className="wrapper">

          <TaskInput onAddClick={this.onAddClick} />
          <Notes />
        </div>

        {/*
        <SignIn />
        <Register />
        <Topic /> //
        <Settings />
         */}

      </div>
    );
  }
}

export default App;
