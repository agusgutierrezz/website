import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";

import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
