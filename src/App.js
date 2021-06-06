import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Header from "../src/components/header/header.component";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscibeFromAuth = null;
  componentDidMount() {
    this.unsubscibeFromAuth = auth.onAuthStateChanged((user) => {
      // this.state.currentUser = user;
      this.setState({currentUser:user})
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscibeFromAuth();
  }
  render() {
    return (
      <div>
        {/* {console.log(this.state.currentUser)} */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signIn" component={SignInSignUp} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
