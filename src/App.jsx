import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout
import Layout from './Layout';

// pages
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<About />} />
          
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
