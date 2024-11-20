import React, { useState, useEffect } from "react";

const UserForm = ({ onAddUser, onEditUser, selectedUser, setSelectedUser }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    company: { name: "" },
  });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      onEditUser(user);
    } else {
      onAddUser({ ...user, id: Math.random() });
    }
    setUser({ id: "", name: "", email: "", company: { name: "" } });
    setSelectedUser(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <label>Email</label>
      <input
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <label>Department</label>
      <input
        type="text"
        value={user.company.name}
        onChange={(e) =>
          setUser({ ...user, company: { name: e.target.value } })
        }
      />
      <button type="submit">{selectedUser ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
