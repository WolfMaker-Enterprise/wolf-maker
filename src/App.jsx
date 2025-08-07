import "./App.css";
import Diferencials from "./components/Diferencials.jsx";
import HomeSection from "./components/HomeSection.jsx";
import LineDivider from "./components/LineDivider.jsx";
import NavBar from "./components/NavBar.jsx";
import OurWork from "./components/OurWork.jsx";
import ServicesCarousel from "./components/ServicesCarousel.jsx";
import Soluctions from "./components/Soluctions.jsx";

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
    </>
  );
}

export default App;
