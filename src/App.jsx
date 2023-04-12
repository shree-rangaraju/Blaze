import Navbar from "./Components/Navbar";
import Cover from "./Components/Cover";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Quote from "./Components/Quote";
export default function App() {
  return (
    <div id="Hero" className="main shadow">
      <Navbar />
      <Cover />
      <Quote />
      <About />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
