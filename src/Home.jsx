import Header from "./component/Header";
import NavBar from "./component/NavBar";
import HowItWorks from "./component/HowItWorks";
import AboutUS from "./component/AboutUS";
import Services from "./component/Services";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <HowItWorks />
      <AboutUS />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
