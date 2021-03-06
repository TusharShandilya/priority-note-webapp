import React from 'react';
import "./Forms.css";
import "tachyons";


class SignIn extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            user_email: "",
            password: "",
        }                
    }    

    handleEmailChange = (event) =>{
        this.setState({user_email: event.target.value});
    }
    
    handlePasswordChange = (event) =>{
        this.setState({password: event.target.value});
    }


    onSubmitButtonClick = () => {
        fetch('https://serene-tundra-18022.herokuapp.com/signin',{
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
              user_email: this.state.user_email,
              password: this.state.password
            })
        }).then(response => response.json())
          .then(user => {
            if(user[0].id) {
              this.props.loadUser(user);
             this.props.handleRouteChange('home');
            } else if (user === 'incorrect submission'){
                document.getElementById("failMessage").innerHTML = 'Enter email and password!';
              } else {
                document.getElementById("failMessage").innerHTML = 'Email/Password combination not found!';
              }
          })
    }

    render(){

        return(
        <div className="measure formWrapper inputForm">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <h3 className="f2  fw6 ph0 mh0 tc">Sign In</h3>
                <div className="mt3">
                    <label 
                     className="db fw6 lh-copy f6" 
                     htmlFor="email-address">Email</label>
                    <input 
                        className=" inputField" 
                        maxLength="50"
                        type="email" 
                        name="email-address"  
                        id="email-address" 
                        placeholder="email@example.com"
                        autoFocus
                        required
                        onChange={this.handleEmailChange}
                        />
                </div>                
                <div className="mv3">
                    <label 
                      className="db fw6 lh-copy f6" 
                      htmlFor="password">Password</label>
                    <input 
                        className=" inputField"
                        type="password" 
                        name="password"  
                        id="password" 
                        placeholder="Enter your password"
                        required
                        onChange={this.handlePasswordChange}                            
                        />
                       <h5 id="failMessage"></h5>
                </div>
                    {/*
                        *TODO:
                        ** Add cookies to let the user Check Remeber Me option

                    <label className="pa0 ma0 lh-copy f6 pointer">
                        <input type="checkbox" /> Remember me 
                    </label>
                    */}
            </fieldset>
            <div className="tc ">
                <input 
                    className="grow field" 
                    type="submit" 
                    value="Sign In"
                    id="home"
                    onClick={this.onSubmitButtonClick} 
                    />
            </div>
            <div className="tc mt3">
                <a 
                  href="#0" 
                  className="dim pointer links"
                  id="register"
                  onClick={() => this.props.handleRouteChange('register')}
                  >Register</a>
                {/*
                    *TODO:
                    ** make it work at the backend with update command
                    <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                */}
                
            </div>
        </div>
            
        );
    }
}

export default SignIn;