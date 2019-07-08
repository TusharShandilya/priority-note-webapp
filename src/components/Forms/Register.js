import React from 'react';
import "./Forms.css";
import "tachyons";


class SignIn extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitRegister = () => {
        
      fetch('https://serene-tundra-18022.herokuapp.com/register', {
          method: 'post',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              user_name: this.state.name,
              user_email: this.state.email,
              password: this.state.password,
          })
        }).then(resp => resp.json())
            .then(user => {
                if(user[0].id){
                    this.props.loadUser(user);
                    this.props.handleRouteChange('signIn');
                }
            })
    }


    render(){

        return(
        <div className="measure formWrapper inputForm">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <h3 className="f2  fw6 ph0 mh0 tc">Register</h3>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input 
                        className=" inputField" 
                        type="text" 
                        name="username"  
                        id="userName"
                        autoFocus
                        placeholder="Enter your name"
                        required
                        onChange={this.onNameChange}  />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                        className=" inputField" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        placeholder="email@example.com"
                        required
                        onChange={this.onEmailChange}   />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                        className=" inputField"
                        type="password" 
                        name="password"  
                        id="password" 
                        placeholder="Choose a password"
                        required
                        onChange={this.onPasswordChange}
                        />
                </div>
                    {/*
                        *TODO:
                        ** Add cookies to let the user Check Remeber Me option

                    <label className="pa0 ma0 lh-copy f6 pointer">
                        <input type="checkbox" /> Remember me 
                    </label>
                    */}
            </fieldset>
            <div className="tc">
                <input 
                    className="grow pointer field" 
                    type="submit" 
                    value="Sign Up" 
                    onClick = {this.onSubmitRegister} />
            </div>
            
        </div>
            
        );
    }
}

export default SignIn;