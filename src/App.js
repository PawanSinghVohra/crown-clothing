import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import Shop from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
    </div>
  );
}

export default App;
