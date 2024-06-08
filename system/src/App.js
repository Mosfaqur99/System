import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import About from "./components/About";
import About2 from "./components/About2";
import Logout from "./components/Logout";
import AddProducts from "./components/AddProduct";
import Products from "./components/Products";
import Update from "./components/Update";
import "./App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth");
    if (authStatus) {
      setIsAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  };

  const handleLogin = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuth(true);
  };

  return (
    <Router>
      {isAuth && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<About2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setAuth={handleLogin} />} />
        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/about"
          element={isAuth ? <About /> : <Navigate to="/login" />}
        />

        <Route
          path="/add-products"
          element={isAuth ? <AddProducts /> : <Navigate to="/login" />}
        />
        <Route
          path="/products"
          element={isAuth ? <Products /> : <Navigate to="/login" />}
        />
        <Route
          path="/update"
          element={isAuth ? <Update /> : <Navigate to="/login" />}
        />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
};

export default App;
