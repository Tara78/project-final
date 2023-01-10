import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About  from "./components/pages/About";
import Booking from "./components/pages/Booking";
// import Menu from "./components/Navbar/Menu";
// import Navbar from "./NewNavBar/Navbar";
import NewBar from "./NewNavBar/NewBar";
import Contact from "./components/pages/Contact";
import Tarif from "./components/pages/Tarif";
import Why from "./components/pages/Why";
// import Calendar from "./components/pages/Calendar"



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
      {/* <Route path="/calendar" element= {<Calendar /> } /> */}
      
    </Routes>
  
  </Router>
  );
}

export default App;

