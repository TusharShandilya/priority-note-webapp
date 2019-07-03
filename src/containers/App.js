import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import Welcome from '../components/Welcome/Welcome';
import TaskInput from '../components/TaskInput/TaskInput';
import NotesList from '../components/NotesList/NotesList';

const initialState = {
  inputField: null,  
  name: 'Billy',
  list: [],
  
};


class App extends Component {
  constructor(props){
    super(props);
    this.state = initialState;

  }

  handleAddClick = () => {
    const newListOfItems = this.state.list;
   
    if(this.state.inputField)
    {newListOfItems.push({
      sNo: newListOfItems.length,
      item: this.state.inputField
    });}

    this.setState({list: newListOfItems});
    this.setState({inputField: null});

    
    
  }

  handleDeleteClick = (event) => {
    console.log(event.target.id);
    const newListOfItems = this.state.list;

    newListOfItems.splice(event.target.id,1);

    this.setState({list: newListOfItems});
  }

  handleChange = (event) => {
    this.setState({inputField: event.target.value});
    event.persist();    
  }

  keyPress = (e) => {
    console.log(e.keyCode );
    if(e.keyCode === 13){
      this.handleAddClick();
    }
  }

  render(){

    return (
      <div className="App">
        <Navigation />
        <Welcome name={this.state.name}/>
        <Logo />
        <div className="wrapper">

          <TaskInput 
            setNull = {this.state.setNull}
            onAddClick={this.handleAddClick} 
            onInputChange={this.handleChange}
            enterPress={this.keyPress}
            />

          <NotesList 
            onDeleteClick={this.handleDeleteClick} 
            itemList={this.state.list}/>

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
