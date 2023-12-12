async function RandomMovie(genre) {
    if (genre === 'rand') {
      // Se o gênero for 'rand', retorna qualquer filme aleatório
      const ApiURL = 'http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&type=movie';
      return fetch(ApiURL)
        .then(response => response.json())
          .then(data=>{
              // Verifique se a solicitação foi bem-sucedida
              if (data.Response === 'True') {
                // Retorna o URL do poster
                return data.Poster, data.Title;

              } else {
                return null; // Retorna nulo se o filme não for encontrado
              }

          })

    } else {
      // Caso contrário, retorna um filme aleatório do gênero especificado
      const response = await axios.get(`http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&type=movie&genre=${genre}`);
      const randomIndex = Math.floor(Math.random() * response.data.Search.length);
      const imdbID = response.data.Search[randomIndex].imdbID;
      const ApiURLtoRandomGenre =  `http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&i=${imdbID}`;
      return fetch(ApiURLtoRandomGenre)
        .then(response => response.json())
          .then(data=>{
              // Verifique se a solicitação foi bem-sucedida
              if (data.Response === 'True') {
                // Retorna o URL do poster
                return data.Poster, data.Title;

              } else {
                return null; // Retorna nulo se o filme não for encontrado
              }

          })
    }
  }
