const TMDB_API_KEY = '043fe6a0cc6d215f5b63dc8fb46878b2I'; // Substitua pela sua chave de API do TMDb
const BASE_URL = 'https://api.themoviedb.org/3';

async function obterFilmesPopulares() {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
    const filmes = response.data.results.map(filme => ({
      poster: `https://image.tmdb.org/t/p/w500${filme.poster_path}`,
      titulo: filme.original_title,
    }));

    return filmes;
  } catch (error) {
    console.error('Erro ao obter filmes populares:', error.message);
    throw error;
  }
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
