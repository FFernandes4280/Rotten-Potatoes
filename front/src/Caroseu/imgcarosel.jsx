function getMoviePoster(apiKey, movieTitle) {
    
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`;

  return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Verifique se a solicitação foi bem-sucedida
          if (data.Response === 'True') {
              // Retorna o URL do poster
              return data.Poster;
          } else {
              console.error('Filme não encontrado');
              return null; // Retorna nulo se o filme não for encontrado
          }
      })
      .catch(error => {
          console.error('Erro:', error);
          return null; // Retorna nulo em caso de erro
      });
}