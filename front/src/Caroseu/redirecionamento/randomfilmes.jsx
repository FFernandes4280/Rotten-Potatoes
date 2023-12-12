const apiKey = '043fe6a0cc6d215f5b63dc8fb46878b2I';
const baseUrl = 'https://api.themoviedb.org/3';

async function getRandomMoviePosterAndTitle(genre) {
  let apiUrl = '/discover/movie';

  
  if (genre !== 'rand') {
    apiUrl = `/discover/movie?with_genres=${genre}`;
  }

  try {
    
    const response = await axios.get(`${baseUrl}${apiUrl}`, {
      params: {
        api_key: apiKey,
        sort_by: 'popularity.desc', 
        page: 1, 
      },
    });

    
    const randomIndex = Math.floor(Math.random() * response.data.results.length);
    const randomMovie = response.data.results[randomIndex];

   
    const posterPath = randomMovie.poster_path;
    const posterUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null;

   
    return {
      title: randomMovie.title,
      posterUrl: posterUrl,
    };
  } catch (error) {
    console.error('Erro ao obter filme aleatório:', error);
    return null;
  }
}

// // Exemplo de uso:
// getRandomMoviePosterAndTitle('rand')
//   .then(movie => {
//     if (movie) {
//       console.log('Título do Filme:', movie.title);
//       console.log('URL do Poster:', movie.posterUrl);
//     } else {
//       console.log('Não foi possível obter um filme aleatório.');
//     }
//   })
//   .catch(error => console.error('Erro:', error));
