import "./donate_form.css";
import React from "react";
import { Component } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PayPal from "./paypal";
import donation_8 from "../images/donation_8.png";


/*
the above are the essential libraries.
// Auther: Naveed Nazamy
*/

// register.js is the extension of component
class Register extends Component {
  constructor(props) {
    super(props);
    //properties of the component
    this.state = {
      show: false,
      firstName: "",
      lastName: "",
      phonenumber: "",
     
      emailaddress: "",
      fulladdress: "",
      postCode: "",
     
      error: false,
      errMsg: "",
      successMsg: "",
      success: false,
      msg: "",
    };

    //bind for showhandle and hidehandle
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    //bind for the following user data, change when a button is pressed
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onPhonenumberChange = this.onPhonenumberChange.bind(this);
    this.onEmailaddressChange = this.onEmailaddressChange.bind(this);
    this.onFulladdressChange = this.onFulladdressChange.bind(this);
    this.onPostCodeChange = this.onPostCodeChange.bind(this);
   
  }
  

  //   submit event
  handleSubmit(event) {
    event.preventDefault();

    // post code uk format
    let postalcode = this.state.postCode;
    postalcode = postalcode.replace(/\s/g, "");
    var regex = /^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;

    //check for correct post code format
    if (!regex.test(postalcode)) {
      this.setState({ err: true });
      this.setState({ errMsg: "Enter a valid postal code" });
      return null;
    }

    //mobile number uk format
    let p = this.state.phonenumber;
    postalcode = p.replace(/\s/g, "");
    var regex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
    // check for correct mobile phone format
    if (!regex.test(p)) {
      this.setState({ err: true });
      this.setState({ errMsg: "Enter a valid Phone Number!" });
      return null;
    }

    // check if the password is matching with the repeated password
    if (this.state.password !== this.state.repeatPassword) {
      this.setState({ err: true });
      this.setState({ errMsg: "Password does not match!" });
      return null;
    }
    // constant user data
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailaddress: this.state.emailaddress,
      phonenumber: this.state.phonenumber,
      fulladdress: this.state.fulladdress,
      password: this.state.password,
      postCode: this.state.postCode,
      dateOfBirth: this.state.dateOfBirth,
    };

    

    console.log(user);
    // axios library to access signup using POST method
    axios({
      method: "POST",
      url: "",
      data: user,
    })
      .then((response) => {
        console.log(response.status);
        <PayPal />
        if (response.status === 201 || response.status === 200) {
          // show the handle message when the account is registered successfully
          this.handleShow(
            "Thank you! Your account has been registered successfully!"
          );
          // reset the form for other entries
          this.resetForm();
        } else {
          console.log(response.status);
          alert(response);
        }
        // catch any errors when found show the error message reponse
      })
      .catch((error) => {
        const err = error;
        if (err.response) {
          this.setState({ err: true });
          this.setState({ errMsg: err.response.data });
          console.log(err.response.status);
          console.log(err.response.data);
        }
      });
  }
  handleClick(){
    console.log("heloooo")
  }
  // hide handle event
  handleHide() {
    console.log("okay");
    this.setState({ show: false });
  }
  // show handle event
  handleShow(daata) {
    this.setState({ msg: daata });
    this.setState({ show: true });
  }

 
  //   post code event
  onPostCodeChange(event) {
    this.setState({ postCode: event.target.value });

    this.setState({ success: false });
    this.setState({ err: false });
  }
  //   full address event
  onFulladdressChange(event) {
    this.setState({ fulladdress: event.target.value });

    this.setState({ success: false });
    this.setState({ err: false });
  }
  //   email address event
  onEmailaddressChange(event) {
    this.setState({ emailaddress: event.target.value });

    this.setState({ success: false });
    this.setState({ err: false });
  }
  //   phone number event
  onPhonenumberChange(event) {
    this.setState({ phonenumber: event.target.value });
    this.setState({ success: false });
    this.setState({ err: false });
  }
  //   last name event
  onLastNameChange(event) {
    this.setState({ lastName: event.target.value });

    this.setState({ success: false });
    this.setState({ err: false });
  }
  //   first name event
  onFirstNameChange(event) {
    this.setState({ firstName: event.target.value });

    this.setState({ success: false });
    this.setState({ err: false });
  }

  //reset all the following form entries when the resetform() function is called.
  resetForm() {
    this.setState({ firstName: "" });
    this.setState({ phonenumber: "" });
    this.setState({ lastName: "" });
    this.setState({ emailaddress: "" });
    this.setState({ fulladdress: "" });
    this.setState({ error: "" });
    this.setState({ postCode: "" });
    this.setState({ errMsg: "" });
  }

  //
  render() {
    return (
      <div class="main">
        {/* model this hides the model and brings back the main screen*/}

        <Modal show={this.state.show} onHide={this.handleHide}>
          <Modal.Body>{this.state.msg}</Modal.Body>
          <Modal.Footer>
            {/* close button closes the model */}
            <Button variant="secondary" onClick={this.handleHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/*  */}
        <div class="container container-2">
          <div class="sign-up-content">
            {this.state.err === true && (
              <div class="alert alert-danger" role="alert">
                {this.state.errMsg}
              </div>
            )}

            {/* registration form */}
            <form onSubmit={this.handleSubmit.bind(this)} class="signup-form">
              <h3 class="form-title">Donate Here</h3>
              <br />

              <div className="row" style={{padding:"6.5px 6.5px"}}>
                <div className="col s12">
                  <div class="form-textbox1">
                    <label for="name">First Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.firstName}
                      required="required"
                      // call the firstname change event
                      onChange={this.onFirstNameChange}
                      class="input1"
                    />
                  </div>
                </div>
                <div className="col s12">
                  <div class="form-textbox1">
                    <label for="name">Last name</label>
                    <input
                      type="text"
                      value={this.state.lastName}
                      name="lastname"
                      id="lastname"
                      required="required"
                      // call teh last name change event
                      onChange={this.onLastNameChange}
                      class="input1"
                    />
                  </div>
                </div>
              </div>

              
              

              {/* email address input box */}
              <div class="form-textbox1">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="emailaddress"
                  value={this.state.emailaddress}
                  id="emailaddress"
                  required="required"
                  class="input1"
                  // call the email address change event
                  onChange={this.onEmailaddressChange}
                />
              </div>
              {/* mobile phone number input box */}
              <div class="form-textbox1">
                <label for="phonenumber">Phone</label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  value={this.state.phonenumber}
                  required="required"
                  class="input1"
                  // call the phone number event
                  onChange={this.onPhonenumberChange}
                />
              </div>

              {/* full address input box */}
              <div class="form-textbox1">
                <label for="fulladdress">Address</label>
                <input
                  type="text"
                  name="fulladdress"
                  value={this.state.fulladdress}
                  id="fulladdress"
                  required="required"
                  class="input1"
                  // call the full address change event
                  onChange={this.onFulladdressChange}
                />
              </div>

              {/* post code input box */}
              <div class="form-textbox1">
                <label for="postCode">Post code</label>
                <input
                  type="text"
                  name="postCode"
                  value={this.state.postCode}
                  id="postCode"
                  required="required"
                  class="input1"
                  // call the post code change event
                  onChange={this.onPostCodeChange}
                />
              </div>

              {/* register button division */}
              <div class="form-textbox mt-3" >
                <button type="submit" name="submit" style={{border:"None" , width:"40%" ,background:"none"}}>
                <img src={donation_8} className="img-fluid logo-img" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
