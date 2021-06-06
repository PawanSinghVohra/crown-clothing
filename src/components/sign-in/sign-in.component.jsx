import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="sign-in">
        <h3>I already have an account</h3>
        <span>SignIn with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit" value="SignIn">
              SignIn
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              value="SignIn"
              isGoogleSignIn
            >
              Sign IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
