import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WorkDetail from "./components/WorkDetail";
import Home from "./components/Home";
import houses from "./assets/houses.jpg";
import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/cssInteractions"
            component={() => (
              <WorkDetail
                title={`Very big title`}
                paragraph={`Some longer explanation about the title.A little big longer`}
                img={houses}
                link={"https://natourfront.netlify.app/"}
                linkGh={"https://github.com/agusgutierrezz/natour"}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
