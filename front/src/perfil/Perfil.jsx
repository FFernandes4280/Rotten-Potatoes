import '../style/perfil.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Perfil() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/perfil');
        const { username, email } = response.data;
        setUsername(username);
        setEmail(email);
      } catch (error) {
        setEmail('Erro ao carregar o email');
        setUsername('Erro ao carregar o username');
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <>
      <div className='perfil'>
        <fieldset>
          <legend>User:</legend>
          <p className='server-response'>{username}</p>
        </fieldset>
        <fieldset>
          <legend>Email:</legend>
          <p className='server-response'>{email}</p>
        </fieldset>
        <Link to="/perfiledit"><button>ALTERAR DADOS</button></Link>
      </div>
    </>
  );
}
