import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WorkDetail from "./components/WorkDetail";
import Home from "./components/Home";
import houses from "./assets/houses.jpg";
import natour from "./assets/natour.jpg";

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
                title={`CSS Interactions`}
                paragraph={`“When should you use JavaScript when you can use CSS?” The answer is never.`}
                img={natour}
                link={"https://natourfront.netlify.app/"}
                linkGh={"https://github.com/agusgutierrezz/natour"}
              />
            )}
          />
          <Route
            path="/grid"
            component={() => (
              <WorkDetail
                title={`CSS Grid`}
                paragraph={`“When should you use JavaScript when you can use CSS?” The answer is never.`}
                img={houses}
                link={"https://nexterfront.netlify.app/"}
                linkGh={"https://github.com/agusgutierrezz/nexter"}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
