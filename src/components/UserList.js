import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <table className="user-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name.split(" ")[0]}</td>
            <td>{user.name.split(" ")[1] || ""}</td>
            <td>{user.email}</td>
            <td>{user.company?.name || "N/A"}</td>
            <td>
              <button className="edit" onClick={() => onEdit(user)}>
                Edit
              </button>
              <button className="delete" onClick={() => onDelete(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
