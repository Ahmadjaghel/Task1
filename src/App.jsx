import "./App.css";
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import { Routes, Route } from "react-router";
import Property from "./pages/Property/Property";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/HomeComponents/NavBar/NavBar";
import Footer from "./components/HomeComponents/footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Properties" Component={Properties} />
        <Route path="/Property" Component={Property} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
