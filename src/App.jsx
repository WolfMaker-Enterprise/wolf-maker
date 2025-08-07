import "./App.css";
import Diferencials from "./components/Diferencials.jsx";
import FAQ from "./components/FAQ.jsx";
import HomeSection from "./components/HomeSection.jsx";
import LineDivider from "./components/LineDivider.jsx";
import NavBar from "./components/NavBar.jsx";
import OurWork from "./components/OurWork.jsx";
import ServicesCarousel from "./components/ServicesCarousel.jsx";
import Soluctions from "./components/Soluctions.jsx";
import TeamSection from "./components/TeamSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <LineDivider />
      <ServicesCarousel />
      <Diferencials />
      <Soluctions />
      <OurWork />
      <TeamSection />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
