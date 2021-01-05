import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Top from "./Top";

function Home() {
  return (
    <div>
      <Header
        place={"Start a project"}
        name={"Welcome to my portfolio. CSS is everywhere."}
        link={"/contact"}
      />

      <About />
      <Carousel />
      <Top />
      <Footer />
    </div>
  );
}

export default Home;
