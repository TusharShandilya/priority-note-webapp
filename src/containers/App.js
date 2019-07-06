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
  list: [],
  route: 'signIn',
  priority: '3',
  user : {
    id: '',
    name: '',
    email: '',
    enteries: 0,
    joined: ''
  }
};


class App extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  handleRouteChange = (route) => {
    if(route === "register") {
      this.setState({route: 'register'});
    } else if(route === "signIn" || route === "signout") {
        this.setState({route: 'signIn'});
      } else {
            this.setState({route: 'home'});
          }
  } 

  loadUser = (data) => {
    console.log(data);
    this.setState({
      user : {
        id: data.id,
        name: data.user_name,
        email: data.email,
        enteries: data.enteries,
        joined: data.joined
      }
    })
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

    const {user, list, route, priority} = this.state;

    return (
      <div className="App">
        <Navigation 
          currentRoute={ route }
          handleRouteChange = { this.handleRouteChange }
          />        
        <Logo />
        {route === 'signIn' ?
              <div className="wrapper">
                <SignIn 
                  loadUser={this.loadUser}
                  handleRouteChange = {this.handleRouteChange} /> 
                </div> :
                    route === 'register' ? 
                        <div className="wrapper">
                          <Register 
                            loadUser={this.loadUser}
                            handleRouteChange = { this.handleRouteChange }
                          /> 
                        </div> :
                      <div className="wrapper">
                        <Welcome name={user.name}/>
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
