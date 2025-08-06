import "./App.css";
import Diferencials from "./components/Diferencials.jsx";
import HomeSection from "./components/HomeSection.jsx";
import LineDivider from "./components/LineDivider.jsx";
import NavBar from "./components/NavBar.jsx";
import ServicesCarousel from "./components/ServicesCarousel.jsx";

function App() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <LineDivider />
      <ServicesCarousel />
      <Diferencials />
    </>
  );
}

export default App;
