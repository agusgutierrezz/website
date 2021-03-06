import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WorkDetail from "./components/projects/WorkDetail";
import Home from "./components/layout/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Design from "./components/projects/Design";
import houses from "./assets/houses.jpg";
import natour from "./assets/natour.jpg";
import medical from "./assets/medical.jpg";
import tutti from "./assets/tutti.jpg";

import food from "./assets/food.jpg";
import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
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
          <Route
            path="/ironcook"
            component={() => (
              <WorkDetail
                title={`React Hooks`}
                paragraph={`It´s not only about CSS. Check this one out!`}
                img={food}
                link={"https://agusgutierrezz.github.io/drag-drop/"}
                linkGh={"https://github.com/agusgutierrezz/drag-drop"}
              />
            )}
          />
          <Route
            path="/bootstrap"
            component={() => (
              <WorkDetail
                title={`Bootstrap`}
                paragraph={`Since the entire Bootstrap source is written in the SASS language,it only makes sense that SASS is the recommended way to customize Bootstrap!`}
                img={medical}
                link={"https://connectfront.netlify.app/"}
                linkGh={"https://github.com/agusgutierrezz/connect"}
              />
            )}
          />
          <Route
            path="/tutti"
            component={() => (
              <WorkDetail
                title={`Javascript`}
                paragraph={`Call a kid and start playing! Vanilla JS in this fun and cute game.`}
                img={tutti}
                link={"https://agusgutierrezz.github.io/TuttiFrutti/"}
                linkGh={"https://github.com/agusgutierrezz/TuttiFrutti"}
              />
            )}
          />
          <Route path="/design" component={() => <Design />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
