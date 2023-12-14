import React, { useState, useEffect } from 'react';
import ClickableImage from './redirecionamento.jsx';

const YourComponent = ({ genre }) => {
  const apiKey = '043fe6a0cc6d215f5b63dc8fb46878b2';
  const baseUrl = 'https://api.themoviedb.org/3';

  const genreMap = {
    "37999": '28', // Ação
    "6": '16',    // Animação
    "35120": '35', // Comédia
    "21": '18',   // Drama
    "5": '27',    // Terror
  };

  const tmdbGenreId = genreMap[genre];
  const endpoint = `/discover/movie?api_key=${apiKey}&with_genres=${tmdbGenreId}`;

  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}${endpoint}`);
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao obter os dados da API:', error.message);
        setError('Erro ao carregar os dados. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [genre, endpoint]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const randomIndex = Math.floor(Math.random() * data.results.length);
  const movie = data.results[randomIndex];
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const altText = movie.title;

  return (
    <div>
      <div>
        <ClickableImage
          imageUrl={imageUrl}
          alt={altText}
          linkTo={`http://localhost:5173/description/${movie.id}`}
        />
      </div>
    </div>
  );
};

export default YourComponent;
