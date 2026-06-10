import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/Searchbar/Searchbar";
import FeaturedTurfs from "../components/FeaturedTurfs/FeaturedTurfs";
import Sports from "../components/Sports/Sports";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function LandingPage() {
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

export default LandingPage;