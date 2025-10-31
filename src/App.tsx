import Header from "./components/Header/Header";

import "./App.css";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/Header/SearchBar";
import NewsBar from "./components/Header/NewsBar";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Insurances from "./components/Insurences/Insurances";
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
                    <Insurances />



    </>
  );
}

export default App;
