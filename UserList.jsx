import React from 'react';
import api from './api';

function UserList({ users, refresh }) {
  const deleteUser = async (id) => {
    try {
      await api.delete(`/users/${id}`);
    } finally {
      refresh();
    }
  };

  return (
    <div className="card">
      <h3>User List</h3>
      {users.length === 0 && <p className="muted">No users yet.</p>}
      {users.map((user) => (
        <div key={user._id} className="row">
          <span>
            {user.name} <span className="muted">({user.email})</span>
          </span>
          <button
            className="danger"
            onClick={() => deleteUser(user._id)}
            aria-label={`Delete ${user.name}`}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
