import React from 'react';
import "./SignIn.css";
import "tachyons";


class SignIn extends React.Component {

    render(){

        return(
        <div class="measure formWrapper inputForm">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <h3 class="f2  fw6 ph0 mh0 tc"><em>Register</em></h3>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="email-address">Name</label>
                    <input 
                        class=" inputField" 
                        type="text" 
                        name="username"  
                        id="userName" />
                </div>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input 
                        class=" inputField" 
                        type="email" 
                        name="email-address"  
                        id="email-address" />
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">Password</label>
                    <input 
                        class=" inputField"
                        type="password" 
                        name="password"  
                        id="password" />
                </div>
                    {/*
                        *TODO:
                        ** Add cookies to let the user Check Remeber Me option

                    <label class="pa0 ma0 lh-copy f6 pointer">
                        <input type="checkbox" /> Remember me 
                    </label>
                    */}
            </fieldset>
            <div class="tc">
                <input 
                    class="grow pointer field" 
                    type="submit" 
                    value="Sign in" />
            </div>
            
        </div>
            
        );
    }
}

export default SignIn;