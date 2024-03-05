import "./App.css";
import { useState } from "react";
import Home from "./components/Home.tsx";
import Register from "./components/Register.tsx";
import Cart from "./components/Cart.tsx";
import Login from "./components/Login.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const onUpdate = () => {
    fetchUsers();
  };

  const fetchUsers = async () => {
    const res = await fetch("http://127.0.0.1:5000/users");
    const data = await res.json();
    setUsers(data.users);
    console.log(data.users);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <Home existingUser={currentUser} updateCallback={onUpdate} />
          }
          path="/"
        />
        <Route
          element={
            <Login existingUser={currentUser} updateCallback={onUpdate} />
          }
          path="/login"
        />

        <Route
          element={
            <Register existingUser={currentUser} updateCallback={onUpdate} />
          }
          path="/register"
        />
        <Route
          element={
            <Cart existingUser={currentUser} updateCallback={onUpdate} />
          }
          path="/cart"
        />
      </Routes>
    </div>
  );
}

export default App;
