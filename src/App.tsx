import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.tsx";
import Users from "./components/Users.tsx";
import Register from "./components/Register.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentUser({});
  };

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  const openEditModal = (user) => {
    if (isModalOpen) return;
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const onUpdate = () => {
    closeModal();
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
      <Navbar />
      <Register
        openModal={openCreateModal}
        closeModal={closeModal}
        modalOpen={isModalOpen}
        editModal={openEditModal}
        existingUser={currentUser}
        updateCallback={onUpdate}
      />
      {/* <Users
        users={users}
        updateCallback={onUpdate}
        editModal={openEditModal}
      /> */}
      <Footer />
    </div>
  );
}

export default App;
