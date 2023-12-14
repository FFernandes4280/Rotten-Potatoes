import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../style/Description.css'; // Importe o CSS antigo

const Description = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        // Obter o trailer do YouTube ao carregar os dados do filme
        fetchYouTubeTrailer(result.title);
      } catch (error) {
        console.error('Erro ao obter os dados do filme:', error.message);
        setError('Erro ao obter dados do filme. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    const fetchYouTubeTrailer = async (movieTitle) => {
      try {
        const youtubeApiKey = 'AIzaSyCPSm-5uGcxq22H0OkaaWFCAfE37dPi1_4';
        console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movieTitle} trailer&key=${youtubeApiKey}`)
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movieTitle} trailer&key=${youtubeApiKey}`);
        console.log(response)
        console.log(movieTitle)
        if (!response.ok) {
          throw new Error('Erro ao obter o trailer do YouTube');
        }
        const result = await response.json();
        // Verificar se há um item válido na resposta do YouTube
        const firstItem = result.items[0];
        if (firstItem && firstItem.id && firstItem.id.videoId) {
          setTrailerUrl(firstItem.id.videoId);
        } else {
          setTrailerUrl(null);
        }
      } catch (error) {
        console.error('Erro ao obter o trailer do YouTube:', error.message);
        setTrailerUrl(null);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { title, overview } = movieData;
  console.log(id)
  

  return (
    <>
      <div>
        <div className='dados'>
          <div className='fundo'>
            <div className='cartaz'>
              <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={title} />
              <h2>{title}</h2>
            </div>
            <div className='Avaliacao'>
              <h3>
                <Link to={`/avaliation/${id}`}>10</Link>
              </h3>
            </div>
          </div>
          <div className='Sinopse'>
            <h2>Sinopse:</h2>
            <p>{overview}</p>
          </div>
        </div>
        <div className='trailer'>
          <h1>Trailer</h1>
          {trailerUrl ? (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailerUrl}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Nenhum trailer disponível para este filme no momento.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Description;
