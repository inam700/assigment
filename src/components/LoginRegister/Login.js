import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputField from "./Form/FormField";
import './register.css'
import { update, generateData, isFormValid } from "./Form/FormActions";
class Login extends Component {
  state = {
    checkEmail: localStorage.getItem("email"),
    checkPassword: localStorage.getItem("password"),
    inputError: false,
    inputSuccess: "",
    inputdata: {
      email: {
        element: "input",
        value: "",
        inputConfig: {
          name: "email_input",
          type: "email",
          placeholder: "Enter Your Email",
        },
        validate: {
          required: true,
          email: true,
        },
        valid: false,
        checked: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        inputConfig: {
          name: "password_input",
          type: "password",
          placeholder: "Enter Your Password",
        },
        validate: {
          required: true,
        },
        valid: false,
        checked: false,
        validationMessage: "",
      },
    },
  };
  updateField = (element) => {
    const newInputData = update(element, this.state.inputdata);
    this.setState({
      inputError: false,
      inputdata: newInputData,
    });
  };
  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.inputdata);
    let formIsValid = isFormValid(this.state.inputdata);

    if (formIsValid) {
      if (
        this.state.checkEmail === this.state.inputdata.email.value &&
        this.state.checkPassword === this.state.inputdata.password.value
      ) {
        localStorage.setItem("success", "true");
        console.log(dataToSubmit);
        this.props.history.push("/")
      } else {
        alert("please check your email and password");
      }
    }
  };
  render() {
    return (
     <div className='register'>
        <div className="login_card">
        <h3>
          Login <span>Form</span>
        </h3>
        <form className="fields" onSubmit={(event) => this.submitForm(event)}>
          <div className="input_box">
            <InputField
              id={"email"}
              inputdata={this.state.inputdata.email}
              change={(element) => this.updateField(element)}
            />
          </div>
          <div className="input_box">
            <InputField
              id={"password"}
              inputdata={this.state.inputdata.password}
              change={(element) => this.updateField(element)}
            />
          </div>
          {this.state.inputError ? (
            <div className="error">Please Check Your Data</div>
          ) : null}
          <button className='button-register' onClick={(event) => this.submitForm(event)}>Login</button>
        </form>
        <p>
          Don't have Account <Link to="/register">Click here</Link>
        </p>
      </div>
     </div>
    );
  }
}
export default Login;
