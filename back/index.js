const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs/promises'); 

const SECRET_KEY = 'BaldurGatesGanharDeALANWAKE2=MEME'; 
const USERS_FILE = 'usuarios.json';
const apiKey = '10a61ce6'; //OMBib


const handleError = (res, status, message) => {
    console.error(message);
    res.status(status).send({ error: message });
};

const readUsersFile = async () => {
    try {
        const usersData = await fs.readFile(USERS_FILE, 'utf-8');
        return JSON.parse(usersData);
    } catch (error) {
        throw new Error('Erro ao ler o arquivo de usuários');
    }
};

const writeUsersFile = async (users) => {
    try {
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    } catch (error) {
        throw new Error('Erro ao gravar o arquivo de usuários');
    }
};

function embedYouTubeVideo(apiKey, searchTerm) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${apiKey}&part=snippet&type=video`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const trailerVideoId = data.items[0].id.videoId;
            const trailerEmbedUrl = `https://www.youtube.com/embed/${trailerVideoId}`;
            const iframe = document.createElement('iframe');
            iframe.src = trailerEmbedUrl;
            iframe.width = 560;
            iframe.height = 315;

            document.body.appendChild(iframe);
        })
        .catch(error => console.error('Erro:', error));
}

function getMovieInfo(apiKey, movieTitle) {
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Verifique se a solicitação foi bem-sucedida
            if (data.Response === 'True') {
                // Atribua cada informação a uma variável
                const title = data.Title;
                const year = data.Year;
                const rated = data.Rated;
                const released = data.Released;
                const runtime = data.Runtime;
                const genre = data.Genre;
                const director = data.Director;
                const writer = data.Writer;
                const actors = data.Actors;
                const plot = data.Plot;
                const language = data.Language;
                const country = data.Country;
                const awards = data.Awards;
                const poster = data.Poster;
                const imdbRating = data.imdbRating;
                const ratings = data.Ratings; // Este é um array de avaliações, você pode processá-lo conforme necessário
            } else {
                return res.status(401).send({ error: 'Filme não encontrado. ' });
            }
        })
        .catch(error => console.error('Erro:', error));
}

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

//FUNÇÃO 2 QUE O CARNEIRO PEDIU
function getMovieDetails(movieTitle) {
    return new Promise(async (resolve, reject) => {
        try {
            // Obtém informações do filme da API OMDB
            const omdbUrl = `http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&t=${encodeURIComponent(movieTitle)}`;
            const omdbResponse = await fetch(omdbUrl);
            const omdbData = await omdbResponse.json();
            
            if (omdbData.Response === 'False') {
                //Filme não encontrado
                return res.status(402).send({ error: 'Filme não encontrado' });
                reject('Filme não encontrado');
                return;
            }

            const synopsis = omdbData.Plot;

            // Obtém o ID do vídeo do trailer da API do YouTube
            const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(movieTitle)}%20trailer&key=YOUR_YOUTUBE_API_KEY&part=snippet&type=video`;
            const youtubeResponse = await fetch(youtubeUrl);
            const youtubeData = await youtubeResponse.json();
            const trailerVideoId = youtubeData.items[0]?.id.videoId || null;

            resolve({ synopsis, trailerVideoId });
        } catch (error) {
            return res.status(454).send({ error: 'Erro ao obter detalhes do filme' });
            reject('Erro ao obter detalhes do filme');
        }
    });
}

// getMoviePoster(apiKey, movieTitle)
//     .then(posterUrl => {
//         if (posterUrl !== null) {
//             console.log('URL do Poster:', posterUrl);
//         } else {
//             console.log('Erro ao obter o poster.');
//         }
//     });

const addReview = (number,description, user, title)=>{
    try {
        
        const reviews = loadReviews();
    
        
        const newReview = {
          number,
          description,
          user,
          title,
        };
        reviews.push(newReview);
    
        
        saveReviews(reviews);
    
        console.log('Review added successfully!');
      } catch (error) {
        console.error('Error adding review:', error);
      }
};

const loadReviews = () => {
    try {
      const file = fs.readFileSync('reviews.json', 'utf-8');
      return JSON.parse(file);
    } catch (error) {
      return [];
    }
  };

const saveReviews = (reviews) => {
    const file = JSON.stringify(reviews, null, 2);
    fs.writeFileSync('reviews.json', file, 'utf-8');
  };

  //addReview(1, 'BALDUR GATES GANHAR DE ALAN WAKE É MUITO MEME!', 'Emanuel', 'Titanic');

  const calculateAverageRating = (title) => {
    const reviews = loadReviews();
    const ratingsForMovie = reviews
      .filter((review) => review.title === title)
      .map((review) => review.number);
  
    if (ratingsForMovie.length === 0) {
      return 0; 
    }
  
    const sum = ratingsForMovie.reduce((total, rating) => total + rating, 0);
    const average = sum / ratingsForMovie.length;
  
    return average;
  };







app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});

app.post('/assessments', (req, res)=>{
    res.send({token: '1234'});
});

app.post('/evaluate', (req, res)=>{
    res.send({token: '1234'});
});

app.post('/description', (req, res)=>{
    res.send({token: '1234'});
});

app.post('/home', (req, res)=>{
    res.send({token: '1234'});
});

app.post('/login', async (req, res) => {
    try {
        // Lê os usuários e senhas do usuarios.JSON
        const usersData = await fs.readFile('usuarios.json', 'utf-8');
        const users = JSON.parse(usersData);

        // Extrai as informações de usuário e senha do corpo da solicitação
        const { username, password } = req.body;

        // Procura o usuário no array de usuários
        const user = users.find(u => u.username === username);

        if (!user) {
            // Usuário não encontrado
            return res.status(401).send({ error: 'Usuário não encontrado' });
        }

        // Compara a senha fornecida com a senha criptografada no arquivo JSON
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            // Senha incorreta
            return res.status(401).send({ error: 'Senha incorreta' });
        }

        // Gera um token JWT para o usuário
        const token = jwt.sign({ username: user.username }, 'chave_secreta_do_servidor', { expiresIn: '1h' });

        // Retorna o token
        res.send({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro no servidor' });
    }
});

app.post('/register', async (req, res) => {
    try {
        const users = await readUsersFile();
        const { username, password } = req.body;

        if (users.some(u => u.username === username)) {
            return handleError(res, 400, 'Usuário já existe');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { username, password: hashedPassword };
        users.push(newUser);

        await writeUsersFile(users);

        const token = jwt.sign({ username: newUser.username }, SECRET_KEY, { expiresIn: '1h' });
        res.send({ token });
    } catch (error) {
        handleError(res, 500, error.message);
    }
});
