import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../style/Avaliation.css';
import axios from 'axios';

const Avaliation = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [text, setText] = useState('');
  const [nota, setNota] = useState(1);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=043fe6a0cc6d215f5b63dc8fb46878b2`);
        if (!response.ok) {
          throw new Error('Erro ao obter os dados do filme');
        }
        const result = await response.json();
        setMovieData(result);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter os dados do filme:', error.message);
        setError('Erro ao obter dados do filme. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Substitua a URL abaixo pela URL do seu endpoint de backend
      const apiUrl = 'http://localhost:3003/avaliation';
      console.log(text, nota);
      const data = {
        name: text,
        avaliation: nota,
      };
      const response = await axios.post(apiUrl,data) 
      console.log(response);
    } catch (error) {
      console.error('Erro ao enviar avaliação para o backend:', error.message);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { title } = movieData;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='corpoava'>
          <div className='postertitulo'>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={title} />
            <h2>{title}</h2>
          </div>
          <div className='avaliacao'>
            <label htmlFor="avaliacao">Avaliação:</label>
            <textarea
              name="textava"
              id="avali"
              cols="30"
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <div className='divbot'>
              <select
                name="Nota"
                id="nota"
                value={nota}
                onChange={(e) => setNota(Number(e.target.value))}
              >
                {/* Opções de 1 a 10 para a nota */}
                {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <button type="submit">AVALIAR</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Avaliation;
