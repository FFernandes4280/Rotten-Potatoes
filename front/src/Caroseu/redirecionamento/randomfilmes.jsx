async function RandomMovie(genre) {
    if (genre === 'rand') {
      // Se o gênero for 'rand', retorna qualquer filme aleatório
      return 'http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&type=movie';
    } else {
      // Caso contrário, retorna um filme aleatório do gênero especificado
      const response = await axios.get(`http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&type=movie&genre=${genre}`);
      const randomIndex = Math.floor(Math.random() * response.data.Search.length);
      const imdbID = response.data.Search[randomIndex].imdbID;
      return `http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&i=${imdbID}`;
    }
  }
