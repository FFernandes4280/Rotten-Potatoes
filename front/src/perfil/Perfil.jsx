import '../style/perfil.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function login(){
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3003/perfil');
        console.log(response);
        setEmail(response.data.user.email);
        setUsername(response.data.user.username);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

  fetchData();
}, []);
  

  return (
    <>
      <div className='perfil'>
        <fieldset>
          <legend>User:</legend>
          <p>{username}</p>
        </fieldset>
        <fieldset>
          <legend>Email:</legend>
          <p>{email}</p>
        </fieldset>
        <Link to="/perfiledit"><button>ALTERAR DADOS</button></Link>
      </div>
    </>
  );
}
