import React, { Component } from 'react';
/* import 'tachyons';*/
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

    this.clearInput();
    
  }

  handleDeleteClick = (event) => {
    console.log(event.target.id);
    const newListOfItems = this.state.list;

    newListOfItems.splice(event.target.id,1);

    this.setState({list: newListOfItems});
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

    const {name, list, route} = this.state;

    return (
      <div className="App">
        <Navigation />
        <Logo />

      {
        route === 'signIn' ? <div className="wrapper"> <SignIn /> </div> :
                    route === 'register' ? <div className="wrapper"><Register /> </div> :
                      <div className="wrapper">
                        <Welcome name={name}/>
                        <TaskInput             
                          onAddClick={this.handleAddClick} 
                          onInputChange={this.handleChange}
                          enterPress={this.keyPress}
                        />
                        <NotesList 
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
