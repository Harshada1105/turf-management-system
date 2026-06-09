import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SearchBar from "./components/SearchBar/SearchBar";
import FeaturedTurfs from "./components/FeaturedTurfs/FeaturedTurfs";
import Sports from "./components/Sports/Sports";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <FeaturedTurfs />
      <Sports />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;