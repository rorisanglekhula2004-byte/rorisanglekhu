import React, { useCallback, useEffect, useState } from 'react';
import api from './api';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const fetchUsers = useCallback(async () => {
    try {
      const res = await api.get('/users');
      setUsers(res.data);
      setError('');
    } catch {
      setError('Cannot reach the server. Is the backend running?');
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="App">
      <h2>React + Express + MongoDB</h2>
      {error && <p className="error">{error}</p>}
      <UserForm refresh={fetchUsers} />
      <UserList users={users} refresh={fetchUsers} />
    </div>
  );
}

export default App;
