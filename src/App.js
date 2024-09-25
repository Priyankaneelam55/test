import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Christiano Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Christiano about page</h1>
      </section>
    </>
  );
};

const Football = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Christiano Foot ball page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Christiano contact details</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/football" element={<Football />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
