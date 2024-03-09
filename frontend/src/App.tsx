import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Cart from "./pages/Cart.tsx";
import Login from "./pages/Login.tsx";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./utils/shoppingCart.tsx";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/users");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ShoppingCartProvider>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />

          <Route element={<Register />} path="/register" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
