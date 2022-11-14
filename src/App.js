import React from "react";
import Home from "./Home";
import ContactPage from "../src/Pages/ContactPage";
import ServicePage from "../src/Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";
import Error from "../src/Pages/Error";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/servicespage" element={<ServicePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route  element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
