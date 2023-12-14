import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../style/Avaliation.css'

const Avaliation = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMovieData = async () => {
        try {
          const apiUrl = window.location.state.apiUrl;
          const response = await fetch(``);
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
  
    if (loading) {
      return <p>Carregando...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    const { title, overview } = movieData;
  
    return(
        <>
        <form onSubmit={handleSubmit(submit)} noValidate>            
            <div className='corpoava'>
                <div className='postertitulo'>
                    <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={title} />
                <h2>{title}</h2>
                </div>
                <div className='avaliação'>
                    <label htmlFor="avaliação"></label>
                    <textarea name="textava" id="avali" cols="30" rows="10"></textarea>
                    <div className='divbot'>
                        <select name="Nota" id="nota">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <button>AVALIAR</button>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default Avaliation;