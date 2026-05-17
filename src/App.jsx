/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="bg-[#0F172A] min-h-screen overflow-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <AppRoutes />

        {/* Footer */}
        <Footer />

      </div>

    </BrowserRouter>
  );
};

export default App;