import React, { useState } from 'react';
import api from './api';

function UserForm({ refresh }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/users', { name, email });
      setName('');
      setEmail('');
      refresh();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not create user');
    }
  };

  return (
    <form onSubmit={submit} className="card">
      <h3>Add User</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default UserForm;
