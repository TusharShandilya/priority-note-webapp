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
  priority: '5',
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
    this.setState({
      user : {
        id: data[0].id,
        name: data[0].user_name,
        email: data[0].email,
        enteries: data[0].enteries,
        joined: data[0].joined
      }      
    })

    let pushInList = [];
    const userArrayLength = data.length;

    if(data[0].list_id !== null) {
      for(let i = 0; i < userArrayLength; i++){
        pushInList.push({
        sNo: data[i].list_id,
        item: data[i].listitem,
        priority: data[i].priority,
        })
      }
    } else {
        this.setState({list: []})
    }
        
    this.setState({list: pushInList});
  }

  
  handleAddClick = () => {
    
    let newListOfItems = this.state.list;

    fetch('https://serene-tundra-18022.herokuapp.com/add', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        priority: this.state.priority,
        listitem: this.state.inputField,
        user_id: this.state.user.id
      })
        }).then(resp => resp.json())
          .then(addedItem => {          
          if(this.state.inputField) {
            newListOfItems.push({
            sNo: addedItem.list_id,
            item: addedItem.listitem,
            priority: addedItem.priority,
            });
          }
          this.setState({list: newListOfItems});
        })

        this.clearInput();    
  }

  handleDeleteClick = (event) => {
    
    const newListOfItems = this.state.list;
    newListOfItems.splice(event.target.value,1);
    this.setState({list: newListOfItems});

    fetch('https://serene-tundra-18022.herokuapp.com/delete', {
      method: 'delete',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        del_id: event.target.id
      })
    }).then(resp => resp.json())
      .then(deleted => (deleted))
  }

  handlePriorityChange = (event) => {    
    this.setState({priority: event.target.value})
  }

  handleChange = (event) => {
    this.setState({inputField: event.target.value});     
  }

  clearInput = () => {
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
