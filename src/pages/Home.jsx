import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GithubActivity from "../components/GithubActivity/GithubActivity";
import Hero from "../components/Hero/Hero";
import Journey from "../components/Journey/Journey";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubActivity />
      <Journey />
      <Contact />
      <Footer />
     
      
    </>
  );
};

export default Home;