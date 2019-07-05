import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import Welcome from '../components/Welcome/Welcome';
import TaskInput from '../components/TaskInput/TaskInput';
import NotesList from '../components/NotesList/NotesList';
import SignIn from '../components/Forms/SignIn';
import Register from '../components/Forms/Register';

const initialState = {
  inputField: null,  
  name: 'Billy',
  list: [],
  route: 'signIn',
  priority: '3',
  
};


class App extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  handleNavClick = (event) => {
    console.log(event.target.id);
    if(event.target.id === "register") {
      this.setState({route: 'register'});
    } else if(event.target.id === "signIn") {
        this.setState({route: 'signIn'});
      } else if(event.target.id === "signout") {
          this.setState({route: 'signIn'});
        } else {
            this.setState({route: 'home'});
          }
  } 

  handleAddClick = () => {
    const newListOfItems = this.state.list;
   
    if(this.state.inputField)
    {newListOfItems.push({
      sNo: newListOfItems.length,
      item: this.state.inputField,
      priority: this.state.priority,
    });}

    this.setState({list: newListOfItems});
    this.setState({inputField: null});

    this.clearInput();
    
  }

  handleDeleteClick = (event) => {
    console.log(event.target.id);
    const newListOfItems = this.state.list;

    newListOfItems.splice(event.target.id,1);

    this.setState({list: newListOfItems});
  }

  handlePriorityChange = (event) => {
    console.log(event.target.value);
    this.setState({priority: event.target.value})

  }

  handleChange = (event) => {
    this.setState({inputField: event.target.value});     
  }

  clearInput = () => {
    console.log(document.getElementById("entryField"));
    document.getElementById("entryField").value = ' ';
  }

  keyPress = (e) => {   
    if(e.keyCode === 13){
      this.handleAddClick();            
    }
  }

  render(){

    const {name, list, route, priority} = this.state;

    return (
      <div className="App">
        <Navigation 
          currentRoute={ route }
          onNavClick = { this.handleNavClick }
          />        
        <Logo />
        {route === 'signIn' ? <div className="wrapper"> <SignIn onRegClick = {this.handleNavClick} /> </div> :
                    route === 'register' ? <div className="wrapper"><Register /> </div> :
                      <div className="wrapper">
                        <Welcome name={name}/>
                        <TaskInput             
                          onAddClick={this.handleAddClick} 
                          onInputChange={this.handleChange}
                          enterPress={this.keyPress}
                          onPriorityChange={this.handlePriorityChange}
                        />
                        <NotesList 
                          priorityNumber={priority}
                          onDeleteClick={this.handleDeleteClick} 
                          itemList={list}/>
                      </div>      
        }   
        {/*}
        <Topic /> //
        <Settings />
         */}

      </div>
    );
  }
}

export default App;
