import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import './SignIn.scss';
import CustomButton from "../custom-button/CustomButton";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
            label="email"
            required
          />
     

          <FormInput
            type="password"
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            label="password"
            required
          />
          

          <CustomButton type="submit" value="Sign In">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
