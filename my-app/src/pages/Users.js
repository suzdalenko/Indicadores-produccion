import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  let miX = 1

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        let miX = response.data; console.log(miX)
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <p>{ miX } { ++miX }</p>
      <ul>
        {
          users.map(user => (<li key={user.id}>{user.id} - {user.name} - {user.email}</li>))
        }
      </ul>
    </div>
  );
};

export default Users;


