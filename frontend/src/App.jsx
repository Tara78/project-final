import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Navbar/Home";
import About  from "./components/Navbar/About";
import Contact from "./components/Navbar/Booking";
// import Menu from "./components/Menu";
import Navbar from "./components/Navbar/Navbar";


function App() {
 return (
  <Router>
    {/* <Menu /> */}
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="navbar" element={ <Navbar/> } />
    </Routes>
  </Router>
  );
}

export default App;
