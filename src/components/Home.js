import Header from "./Header";
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
        nameTwo={"CSS is everywhere."}
        link={"/contact"}
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
