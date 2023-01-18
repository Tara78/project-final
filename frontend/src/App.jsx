import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Tarif from "./pages/Tarif";
import Why from "./pages/Why";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import user from "./reducers/user";
import booking from "./reducers/booking";
import Navbar from "./components/ResponsiveNav/Navbar";

const reducer = combineReducers({
  user: user.reducer,
  booking: booking.reducer,
});

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tarif" element={<Tarif />} />
          <Route path="/why" element={<Why />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
