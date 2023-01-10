import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About  from "./pages/About";
import Booking from "./pages/Booking";
// import Menu from "./components/Navbar/Menu";
// import Navbar from "./NewNavBar/Navbar";
import NewBar from "./NewNavBar/NewBar";
import Contact from "./pages/Contact";
import Tarif from "./pages/Tarif";
import Why from "./pages/Why";




function App() {
 return (
  <Router>
     {/* <Navbar /> */}
     {/* <Menu /> */}
     <NewBar />
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/booking" element={ <Booking /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/tarif" element={ <Tarif /> } />
      <Route path="/why" element={ <Why /> } />
    
      
    </Routes>
  
  </Router>
  );
}

export default App;

