import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Header from "../src/components/header/header.component";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
