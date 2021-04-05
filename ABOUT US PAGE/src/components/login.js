import './register.css';
import { Component } from 'react';
import donate from '../images/donate.jpg';
// import important libraries.
// Auther: Naveed Nazamy

// axios library 
import axios from 'axios';
import {
    //redirect to another path 
    Redirect
} from "react-router-dom";

// login.js is the extension of component
class Login extends Component {


    constructor(props) {
        //call super (props) before any statement to avoid bugs
        //call the react.component
        super(props);
        //properties of the component
        this.state = {
            emailaddress: '',
            password: '',
            error: false,
            errMsg: '',
            successMsg: '',
            success: false,
            isLoggedIn: false,
            userId: null
        };
        // email address and password bind
        this.onEmailaddressChange = this.onEmailaddressChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    // event for password when clicked
    onPasswordChange(event) {
        this.setState({ password: event.target.value });
        this.setState({ err: false })
        this.setState({ success: false })
    }

    //event for email address 
    onEmailaddressChange(event) {
        this.setState({ emailaddress: event.target.value });
        this.setState({ success: false })
        this.setState({ err: false })
    }

    //event for submit 
    handleSubmit(event) {
        event.preventDefault();
        //uder email and password
        const user = {
            emailaddress: this.state.emailaddress,
            password: this.state.password,
        }
        console.log(user);

        //axios library for login using post method and the follwoing API
        axios({
            method: "POST",
            url: "http://localhost:8080/login",
            data: user,
        }).then((response) => {
            console.log(response.status);
            // if the correct email and possword is entered
            if (response.status === 201 || response.status === 200) {
                console.log(response.data);
                this.setState({userId: response.data.id})
                this.setState({isLoggedIn: true});                
            } else {
                console.log(response.status);
                alert(response)
            }
            //catch for any errors if found then show the error message data 
        }).catch((error) => {
            const err = error
            if (err.response) {
                this.setState({ err: true })
                this.setState({ errMsg: err.response.data })
                console.log(err.response.status)
                console.log(err.response.data)
            }

        })

    }


        // if the user is logged in then redirect
    render() {
        console.log("the value "+this.state.isLoggedIn);
        if (this.state.isLoggedIn === true) {
            console.log("I am logged in");
            return <Redirect to={
                {
                    pathname: "/home",
                    userId: this.state.userId
                }
            } />;

        }

        return (

            // main division
            <div class="main">
                <br /><br /><br />
            {/* division for different payment methods */}
                <div class="container container-2">
                    <div class="sign-up-content">
                        <h3 class="form-title">How can you pay: </h3>
                        <br />
                        {/* credit card payment link */}
                        <a href="#">
                           CREDIT CARD PAYMENT
                </a>
                        <h6>If you wish to pay by credit card</h6>

                        <br />
                        {/* debit card payment link */}
                        <a href="#">
                            DEBIT CARD PAYMENT
                </a>

                        <h6>If you wish to pay by debit card</h6>
                        <br />
                        {/* internet banking payment link */}
                        <a href="#">
                            INTERNET BANKING PAYMENT
                </a>

                        <h6>If you wish to pay by Internet Banking</h6>
                    </div>
                </div>
                {/* donate button division  */}
                <button className="btn btn-lg btn-success m-2">
                    Donate
                </button>

                
                {/*  division for any error during the sign up*/}
                <div class="container container-2">
                    <div class="sign-up-content">
                    { this.state.err === true &&
                    <div class="alert alert-danger" role="alert">
                        {this.state.errMsg}
                    </div>
                }
                {/* login form for registered user */}
                        <form onSubmit={this.handleSubmit.bind(this)} class="signup-form">
                            <h3 class="form-title">User Login</h3>
                            <h>For Registered Users Only:</h>
                            <br />
                            

                            {/* email address input box */}
                            <div class="form-textbox">
                                <label for="emailaddress">Email</label>
                                <input 
                                type="email" 
                                name="emailaddress" 
                                
                                value={this.state.emailaddress}
                                id="emailaddress" 
                                required="required"
                                onChange={this.onEmailaddressChange}/>
                                
        </div>
                            {/* password input box */}
                            <div class="form-textbox">
                                <label for="password">Password</label>
                                <input 
                                type="password" 
                                name="password" 
                                
                                value={this.state.password}
                                id="password"
                                required="required"
                                onChange={this.onPasswordChange}
                                />
                        </div>
                        {/* login button division */}
                            <div class="form-textbox mt-3">
                            <button 
                                type="submit" 
                                name="submit" 
                                class="submit" 
                                 >
                                     Login
                                     </button>

                            </div>
                        </form>
                    </div>
                </div>
                <br />

            </div>

        );
    }
}


export default Login;
