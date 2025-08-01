import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Home from "./componentes/Home/Home";
import FilmeDetalhes from "./componentes/FilmeDetalhes/FilmeDetalhes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./componentes/AboutUs/aboutUs";
import "./App.css";

console.log("Header", Header);
console.log("Footer", Footer);
console.log("Home", Home);
console.log("AboutUs", AboutUs);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/filme/:id" element={<FilmeDetalhes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
