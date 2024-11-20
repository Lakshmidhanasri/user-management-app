import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import Pagination from "./components/Pagination";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = (user) => {
    setUsers([user, ...users]);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <h1>User Management App</h1>
        <UserForm
          onAddUser={handleAddUser}
          onEditUser={handleEditUser}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <UserList
            users={currentUsers}
            onEdit={setSelectedUser}
            onDelete={handleDeleteUser}
          />
        )}
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </ErrorBoundary>
  );
};

export default App;
