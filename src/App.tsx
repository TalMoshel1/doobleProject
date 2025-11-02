import Header from "./components/Header/Header";

import "./App.css";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/Header/SearchBar";
import NewsBar from "./components/Header/NewsBar";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Insurances from "./components/Insurences/Insurances";
import FastServices from "./components/FastServices/mobile/FastServices";
import FastServicesDesktop from "./components/FastServices/desktop/FastServicesDesktop";
import AgricultureGallery from "./components/AgricultureGallery/AgricultureGallery";
import NewsSection from "./components/NewsSection/NewsSection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <SearchBar />
      <div className="heroWrapper">
        <NewsBar />
        <HeroSlider />
      </div>
      <FastServices />
      <Insurances />
      <FastServices />
      <FastServicesDesktop /> 
      <AgricultureGallery />
      <NewsSection />
      <Footer />
    </>
  );
}

export default App;
