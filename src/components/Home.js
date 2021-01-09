import Bottom from "./Bottom";
import Header from "./Header";

import About from "./About";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Top from "./Top";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <div>
      <Bottom />
      <Header
        link={"/contact"}
        place={"Start a project"}
        name={"Welcome to my portfolio."}
      />
      <About />
      <Carousel />
      <Top />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
