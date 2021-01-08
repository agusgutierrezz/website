import Header from "./Header";
import Bottom from "./Bottom";

import About from "./About";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Top from "./Top";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <div>
      <Header
        place={"Start a project"}
        name={"Welcome to my portfolio."}
        link={"#contact"}
      />
      <Bottom />

      <About />
      <Carousel />
      <Top />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
