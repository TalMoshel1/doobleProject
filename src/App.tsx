import Header from "./components/Header/Header";

import "./App.css";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/Header/SearchBar";
import NewsBar from "./components/Header/NewsBar";
function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <SearchBar />
      <NewsBar />
    </>
  );
}

export default App;
