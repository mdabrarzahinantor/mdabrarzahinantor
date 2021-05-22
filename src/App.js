import "./App.css";
import Project from "./Components/About/About";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Loader from "./Components/Loader/Loader";
import About from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Loader />
      <Home />
      <About />
      <Services />
      <Project />
      <Skills />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
