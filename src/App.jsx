import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout
import Layout from "./Layout";

// pages
import About from "./pages/About";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
