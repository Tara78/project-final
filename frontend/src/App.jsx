import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About  from "./components/pages/About";
import Booking from "./components/pages/Booking";
// import Menu from "./components/Navbar/Menu";
// import Navbar from "./NewNavBar/Navbar";
import NewBar from "./NewNavBar/NewBar";
import Contact from "./components/pages/Contact";



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
      
    </Routes>
  
  </Router>
  );
}

export default App;

