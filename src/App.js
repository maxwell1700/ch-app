import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from "./components/Home";
import Footer from "./sections/Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}

        />


        <Route
          exact
          path="/login"
          element={<Login />}

        />
        <Route
          exact
          path="/register"
          element={<Register />}
        />
        <Route
          exact
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>

      <Footer />

    </BrowserRouter>



  );
}

export default App;
