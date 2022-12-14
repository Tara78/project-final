import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About  from "./components/About";
import Booking from "./components/Booking";
import Menu from "./components/Navbar/Menu";
import Navbar from "./components/Navbar/Navbar";


function App() {
 return (
  <Router>
     <Navbar />
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/booking" element={ <Booking /> } />
     
    </Routes>
  </Router>
  );
}

export default App;
