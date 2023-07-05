import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import Home from "./components/pages/home";
import "./App.css";
import CreateUser from "./components/pages/createUser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
