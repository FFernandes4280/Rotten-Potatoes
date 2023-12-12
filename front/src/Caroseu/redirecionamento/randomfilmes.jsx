async function RandomMovie(genre) {
  let ApiURL;

  if (genre === 'rand') {
    ApiURL = 'http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&type=movie';
  } else {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&type=movie&genre=${genre}`);
    const randomIndex = Math.floor(Math.random() * response.data.Search.length);
    const imdbID = response.data.Search[randomIndex].imdbID;
    ApiURL = `http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&i=${imdbID}`;
  }

  try {
    const response = await fetch(ApiURL);
    const data = await response.json();

    // Verifique se a solicitação foi bem-sucedida
    if (data.Response === 'True') {
      // Retorna um objeto com o URL do poster e o título
      return { poster: data.Poster, title: data.Title };
    } else {
      // Retorna null se o filme não for encontrado
      return null;
    }
  } catch (error) {
    console.error('Erro na solicitação da API:', error);
    return null;
  }
}
