import React, { Component } from "react";
import InputField from "./Form/FormField";
import { Link } from "react-router-dom";
import "./register.css";
import { update, generateData, isFormValid } from "./Form/FormActions";

class Register extends Component {
  state = {
    inputError: false,
    inputSuccess: "",
    inputdata: {
      firstname: {
        element: "input",
        value: "",
        inputConfig: {
          name: "firstname_input",
          type: "text",
          placeholder: "Enter Your First Name",
        },
        validate: {
          required: true,
        },
        valid: false,
        checked: false,
        validationMessage: "",
      },
      lastname: {
        element: "input",
        value: "",
        inputConfig: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter Your Last Name",
        },
        validate: {
          required: true,
        },
        valid: false,
        checked: false,
        validationMessage: "",
      },
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
      confirmPassword: {
        element: "input",
        value: "",
        inputConfig: {
          name: "confirm_password_input",
          type: "password",
          placeholder: "Confirm Password",
        },
        validate: {
          required: true,
          confirm: "password",
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
      console.log(dataToSubmit);
      localStorage.setItem("firstName", this.state.inputdata.firstname.value);
      localStorage.setItem("lastName", this.state.inputdata.lastname.value);
      localStorage.setItem("email", this.state.inputdata.email.value);
      localStorage.setItem("password", this.state.inputdata.password.value);
      localStorage.setItem(
        "confirmPassword",
        this.state.inputdata.confirmPassword.value
      );
    }
  };
  render() {
    return (
      <div className="register">
        <div className="register_card">
          <h3>
            Registration <span>Form</span>
          </h3>
          <form className="fields" onSubmit={(event) => this.submitForm(event)}>
            <h2>Personal Information</h2>
            <div className="field_block">
              <div className="input_box">
                <InputField
                  id={"firstname"}
                  inputdata={this.state.inputdata.firstname}
                  change={(element) => this.updateField(element)}
                />
              </div>
              <div className="input_box">
                <InputField
                  id={"lastname"}
                  inputdata={this.state.inputdata.lastname}
                  change={(element) => this.updateField(element)}
                />
              </div>
            </div>
            <h2>Account Information</h2>
            <div className="input_box">
              <InputField
                id={"email"}
                inputdata={this.state.inputdata.email}
                change={(element) => this.updateField(element)}
              />
            </div>
            <div className="field_block">
              <div className="input_box">
                <InputField
                  id={"password"}
                  inputdata={this.state.inputdata.password}
                  change={(element) => this.updateField(element)}
                />
              </div>
              <div className="input_box">
                <InputField
                  id={"confirmPassword"}
                  inputdata={this.state.inputdata.confirmPassword}
                  change={(element) => this.updateField(element)}
                />
              </div>
            </div>
            {this.state.inputError ? (
              <div className="error">Please Check Your Data</div>
            ) : null}
            <button className='button-register' onClick={(event) => this.submitForm(event)}>
              Register
            </button>
          </form>
          <p>
            Have an Account ? <Link to="/login">Click here </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default Register;
