import Navbar from "./Components/Navbar";
import Cover from "./Components/Cover";
import Events from "./Components/Events";
import EventDetails from "./Components/EventDetails";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <div class="main">
      <Navbar />
      <Cover />
      <Events />
      <EventDetails />
      <Footer />
    </div>
  );
}
