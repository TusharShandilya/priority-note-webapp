import React from 'react';
import "./SignIn.css";
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
        console.log(event.target.value)
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        console.log(event.target.value)
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        console.log(event.target.value)
        this.setState({password: event.target.value});
    }

    onSubmitRegister = () => {
        
      fetch('http://localhost:3001/register', {
          method: 'post',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              user_name: this.state.name,
              user_email: this.state.email,
              password: this.state.password,
          })
        }).then(resp => resp.json())
            .then(user => {
                if(user.id){
                    this.props.loadUser(user);
                    this.props.handleRouteChange('home');
                }
            })
    }


    render(){

        return(
        <div className="measure formWrapper inputForm">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <h3 className="f2  fw6 ph0 mh0 tc"><em>Register</em></h3>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input 
                        className=" inputField" 
                        type="text" 
                        name="username"  
                        id="userName"
                        onChange={this.onNameChange}  />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input 
                        className=" inputField" 
                        type="email" 
                        name="email-address"  
                        id="email-address" 
                        onChange={this.onEmailChange}   />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                        className=" inputField"
                        type="password" 
                        name="password"  
                        id="password" 
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