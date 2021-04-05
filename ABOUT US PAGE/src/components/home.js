import './register.css';
import React from 'react';
import { Component } from 'react';

import axios from 'axios';

import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';

import DateObject from "react-date-object";

// Auther: Naveed Nazamy
import {
    Link
} from "react-router-dom";

import {
    Redirect
} from "react-router-dom";

// base URL 
const api = axios.create({
    baseURL: `http://localhost:8080/`
})

// home is the extension of component
class Home extends Component {

    constructor(props) {
        super(props);

        console.log(this.props.location.userId);  
        const theId = this.props.location.userId;
        // initialize the following
        this.state = {
            show: false,
            firstName: '',
            lastName: '',
            phonenumber: '',
            dateOfBirth: '',
            emailaddress: '',
            fulladdress: '',
            postCode: '',
            password: '',
            error: false,
            errMsg: '',
            successMsg: '',
            success: false,
            msg: '',
            id: theId,
            isEditDisabled: true 
        };
        this.getUser()

        // bind event to handleshow and handlehide function
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        
        // bind the user data like firstname,lastname.. etc when button is pressed 
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onPhonenumberChange = this.onPhonenumberChange.bind(this);
        this.onEmailaddressChange = this.onEmailaddressChange.bind(this);
        this.onFulladdressChange = this.onFulladdressChange.bind(this);
        this.onPostCodeChange = this.onPostCodeChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onDateOfBirthChange = this.onDateOfBirthChange.bind(this);

    
      }

    //   getting the user data like firstname, lastname, emailaddress....
      getUser = async () => {
        try {
            //
            let data = await api.get('/user/'+this.state.id).then(({ data }) => data);
            // set the user data
            this.setState({firstName: data.firstName});
            this.setState({phonenumber: data.phonenumber});
            this.setState({lastName: data.lastName});
            console.log("Date of birth is: "+data.dateOfBirth);
            // date of birth 
            var d = new DateObject(this.state.dateOfBirth);
            let dateFormated = d.format("YYYY-MM-dd");
            this.setState({dateOfBirth: dateFormated});
            this.setState({emailaddress: data.emailaddress});
            this.setState({fulladdress: data.fulladdress});
            this.setState({postCode: data.postCode});
            this.setState({repeatPassword: ''});
            this.setState({password: data.password});    
            
        } 
        // catch for any error
        catch (err) {
            console.log(err);
        }
    }
    // submit event
      handleSubmit(event) {
        event.preventDefault();
     
        // uk post code format using regular expression
        let postalcode = this.state.postCode;
        postalcode = postalcode.replace(/\s/g, "");
        var regex = /^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;
        // check for uk post code format 
        if(!regex.test(postalcode)) {
            this.setState({err: true});
            this.setState({errMsg: 'Enter valid post code'});
            return null;
        }

        // uk mobile phone number format using regular expression
        let p = this.state.phonenumber;
        postalcode = p.replace(/\s/g, "");
        var regex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
        // check for mobile phone format 
        if(!regex.test(p)) {
            this.setState({err: true});
            this.setState({errMsg: 'Enter a valid phone number'});
            return null;
        }

        // email validation
      

        // 
//       
        // constant values for user
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailaddress: this.state.emailaddress,
            phonenumber: this.state.phonenumber,
            fulladdress: this.state.fulladdress,
            password: this.state.password,
            postCode: this.state.postCode,
            dateOfBirth: this.state.dateOfBirth,
        }
        console.log(user);
        // axios library to call the put method to update the user data
        axios({
            method: "PUT",
            url: "http://localhost:8080/update/"+this.state.id,
            data: user,
        }).then((response) => {
            console.log(response.status);
            // if the information is entered correct
            if (response.status === 201 || response.status === 200) {
                // showing the handleshow event as the following
                this.handleShow("Thank you! Your account has been updated successfully!")
                this.getUser();
            } else {
                
                console.log(response.status);
                alert(response)
            }
            // catch for any error if there is then show error message
        }).catch((error)=> {
                const err = error
                if (err.response) {
                    this.setState({err: true})
                    this.setState({errMsg:err.response.data })
                   console.log(err.response.status)
                   console.log(err.response.data)
                }
             
        })

    }

    // handle hide event 
    handleHide() {
        console.log("okay");
        this.setState({ show: false });
    }
    // hanble show event which shows a message
    handleShow(daata) {
        this.setState({msg: daata});
        this.setState({ show: true });
    }

    // event for date of birth 
      onDateOfBirthChange(event) {
        this.setState({dateOfBirth: event.target.value});
        this.setState({err: false})
        this.setState({success: false})

      }
    //   event for password
      onPasswordChange(event) {
          this.setState({password: event.target.value});
          this.setState({err: false})
          
        this.setState({success: false})
      }
    //   event for repeat password
      onRepeatPasswordChange(event) {
        this.setState({repeatPassword: event.target.value});
        
        this.setState({success: false})
        this.setState({err: false})
      }
    //   event for post code
      onPostCodeChange(event) {
        this.setState({postCode: event.target.value});
        
        this.setState({success: false})
        this.setState({err: false})
      }
    //   event for full address
      onFulladdressChange(event) {
        this.setState({fulladdress: event.target.value});
        
        this.setState({success: false})
        this.setState({err: false})
      }
    //   event for email address
      onEmailaddressChange(event) {
        this.setState({emailaddress: event.target.value});
        
        this.setState({success: false})
        this.setState({err: false})
      }
    //   event for phone number
      onPhonenumberChange(event) {
        this.setState({phonenumber: event.target.value});
        
        this.setState({success: false})
        this.setState({err: false})
      }
    //   event for last name
      onLastNameChange(event) {
        this.setState({lastName: event.target.value});
        
        this.setState({success: false})
        this.setState({err: false})
      }
    //   eventfor first name
      onFirstNameChange(event) {
        this.setState({firstName: event.target.value});
        
        this.setState({success: false})
        this.setState({err: false})
      }
      

        // 
    render() {
        if (this.state.id === undefined) {
            console.log("I am not logged in"+this.state.id);
            return <Redirect to="/" />;
        }

        return (
            <div className="main">
                {/* hise the model and brings back the main screen  */}
<Modal show={this.state.show} onHide={this.handleHide}>
                    <Modal.Body>{this.state.msg}</Modal.Body>
                    <Modal.Footer>
                        {/* close button */}
                        <Button variant="secondary" onClick={this.handleHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
    
                {/* user welcome division */}
            <div className="bg-light-green mt-1 round-border">
                <h4 className="pb-4 pt-4">
                    {/* show the user first name when the user loged in into the 
                    system */}
                    WELCOME {this.state.firstName}
                </h4>
            </div>
            {/* if any error during the sign up */}
            <div className="col-9 col-lg-9 col-xs-12 col-sm-12 container-2">
                <div className="sign-up-content">
                { this.state.err === true &&
                    <div className="alert alert-danger" role="alert">
                        {this.state.errMsg} 
                    </div>

                }
                {/* division form for the user profile information */}
                    <form onSubmit={this.handleSubmit.bind(this)} className="signup-form">
                        <h3 className="form-title">User Profile 
                        
                        <Link to="/dashboard" className="logout-btn">
                                <button className="btn btn-danger"> Logout</button>
                            </Link> 
                            
                        </h3>
                        <br/>
                            {/* first name input box */}
                        <div className="form-textbox">
                            <label htmlFor="name">First Name</label>
                            <input type="text" 
                                name="name" 
                                id="name" 
                                value={this.state.firstName}
                                required="required"
                                onChange={this.onFirstNameChange}
                                disabled={this.state.isEditDisabled}
                                />
                                
                        </div>
                        {/* last name input box */}
                        <div className="form-textbox">
                            <label htmlFor="name">Last name</label>
                            <input 
                                type="text" 
                                value={this.state.lastName}
                                name="lastname" 
                                // is disabled when the edit button is disabled
                                disabled={this.state.isEditDisabled}
                                id="lastname" 
                                required="required"
                                onChange={this.onLastNameChange}
                                />
                        </div>
                        {/* email input box */}
                        <div className="form-textbox">
                            <label htmlFor="emailaddress">Email</label>
                            <input 
                                type="email" 
                                name="emailaddress" 
                                // the input box is disabled when the edit button is disabled
                                disabled={this.state.isEditDisabled}
                                value={this.state.emailaddress}
                                id="emailaddress" 
                                required="required"
                                onChange={this.onEmailaddressChange}/>
                        </div>
                        {/* phone number input box */}
                        <div className="form-textbox">
                            <label htmlFor="phonenumber">Phone</label>
                            <input 
                                type="text" 
                                name="phonenumber" 
                                id="phonenumber"
                                // the input box is disabled 
                                disabled={this.state.isEditDisabled}
                                
                                value={this.state.phonenumber}
                                required="required"
                                onChange={this.onPhonenumberChange}
                                />
                        </div>
                
                            {/* input box for date of birth */}
                        <div className="form-textbox">
                            <label htmlFor="dob">Date of birth</label>
                            <input 
                                type="Date" 
                                name="dob" 
                                id="dob"
                                // input box is disabled
                                disabled={this.state.isEditDisabled}
                                value={this.state.dateOfBirth}
                                required="required"
                                onChange={this.onDateOfBirthChange}
                                />
                        </div>
    
                        {/* input box for full address */}
                        <div className="form-textbox">
                            <label htmlFor="fulladdress">Address</label>
                            <input 
                                type="text" 
                                name="fulladdress" 
                                // the input box is disabled
                                disabled={this.state.isEditDisabled}
                                
                                value={this.state.fulladdress}
                                id="fulladdress"
                                required="required"
                                onChange={this.onFulladdressChange}
                                />
                        </div>
    
                        {/* input box for post code */}
                        <div className="form-textbox">
                            <label htmlFor="postCode">Post code</label>
                            <input 
                                type="text" 
                                name="postCode" 
                                // the input box is disabled when the edit button is disabled
                                disabled={this.state.isEditDisabled}
                                value={this.state.postCode}
                                id="postCode"
                                required="required"
                                onChange={this.onPostCodeChange}
                                />
                        </div>
                        {/* password input box  */}
                        <div className="form-textbox">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                // the password input box is disabled
                                disabled={this.state.isEditDisabled}
                                
                                value={this.state.password}
                                id="password"
                                required="required"
                                onChange={this.onPasswordChange}
                                />
                        </div>
                        <br/>
                        {/* division for edit and cancel button */}
                        <div className="form-textbox mt-9" >
                        <button 
                                type="button" 
                                name="submit" 
                                onClick={()=> this.setState({isEditDisabled: !this.state.isEditDisabled})}
                                className="submit " 
                                 >
                                     {
                                         this.state.isEditDisabled === true &&
                                            <span>Edit</span>
                                     }
                                     
                                     {
                                         this.state.isEditDisabled !== true &&
                                            <span>Cancel</span>
                                     }
                                     
                                     </button>
                                                &nbsp;
                            <button 
                            // update the user profile button 
                                type="submit" 
                                name="submit" 
                                className="submit" 
                                 >
                                     Update
                                     </button>



                        </div>
                    </form>
                </div>
            </div>
    
        </div>
        );
    }

}

export default Home;
