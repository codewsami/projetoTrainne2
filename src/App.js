import Header from "./componentes/Header";
import Footer from "./componentes/Footer/Footer";
import Home from "./componentes/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./componentes/AboutUs/aboutUs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
