import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";

import "./App.scss";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <About />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;
