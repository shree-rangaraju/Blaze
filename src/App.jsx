import Navbar from "./Components/Navbar";
import Cover from "./Components/Cover";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Quote from "./Components/Quote";
export default function App() {
  return (
    <div id="Hero">
      <div className="main shadow">
        <Navbar />
        <Cover />
      </div>
      <div className="main shadow">
        <Quote />
        <About />
        <Events />
      </div>
      <div className="main shadow">
        <Contact />
      </div>
      <div className="main shadow">
        <Footer />
      </div>
    </div>
  );
}
