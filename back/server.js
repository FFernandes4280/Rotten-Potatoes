require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'BaldurGatesGanharDeALANWAKE2=MEME'; 
const USERS_FILE = 'usuarios.json';
const apiKey = '10a61ce6'; //OMBib

let logged;

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log('Servidor na porta 3003');
});

app.post('/perfil', (req, res)=>{
    console.log('Estou no perfil');
    const {username, email} = req.body;
    const jsonPath = path.join(__dirname, '.', 'db', 'usuarios.json');
    const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));
    for (let user of usuariosCadastrados){
        if(user.id === logged){
            console.log(user);
            return res.json({ "usuario" : user.username, "email" : user.email});  
        } 
        else
            return res.status(409).send(`Usuario não encontrado.`);
    }
});

// app.post('/avaliation', (req, res)=>{
//     res.send({token: '1234'});
// });

app.post('/login', async (req, res)=>{
    const {id, email, password} = req.body; 
    
    //Abre o bd (aqui estamos simulando com arquivo)
    const jsonPath = path.join(__dirname, '.', 'db', 'usuarios.json');
    const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    //verifica se existe usuario com email    
    for (let user of usuariosCadastrados){
        if(user.email === email){
            const passwordValidado = await bcrypt.compare(password, user.password);
            if(passwordValidado){ 
                
                const token = jwt.sign(user, process.env.TOKEN);
                logged = user.id;
                return res.json({ "token" : token});
            }
            
            else
                return res.status(422).send(`Usuario ou senhas incorretas.`);
        }   
    }
    //Nesse ponto não existe usuario com email informado.
    return res.status(409).send(`Usuario com email ${email} não existe. Considere criar uma conta!`);

});

app.post('/register', async (req, res)=>{
    //extraindo os dados do formulário para criacao do usuario
    const {username, email, password} = req.body; 
    //Abre o arquivo que simula o bd
    const jsonPath = path.join(__dirname, '.', 'db', 'usuarios.json');
    const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    //verifica se já existe usuario com o email informado
    for (let users of usuariosCadastrados){
        if(users.email === email){
            //usuario já existe. Impossivel criar outro
            //Retornando o erro 409 para indicar conflito
            return res.status(409).send(`Email ${email} já está cadastrado.`);
        }   
    }

    //Gerar um id incremental baseado na qt de users
    const id = usuariosCadastrados.length + 1;

    //gerar uma senha cryptografada
    const salt = await bcrypt.genSalt(10);
    const passwordCrypt = await bcrypt.hash(password,salt);

    //Criacao do user
    const User = require('./model/User');
    const user = new User(id, username, email, passwordCrypt);

    //Salva user no "banco"
    usuariosCadastrados.push(user);
    fs.writeFileSync(jsonPath,JSON.stringify(usuariosCadastrados,null,2));
    res.send(
        `Parabéns, conta criada com sucesso.`
        );
});

// const handleError = (res, status, message) => {
//     console.error(message);
//     res.status(status).send({ error: message });
// };

// const readUsersFile = async () => {
//     try {
//         const usersData = await fs.readFile(USERS_FILE, 'utf-8');
//         return JSON.parse(usersData);
//     } catch (error) {
//         throw new Error('Erro ao ler o arquivo de usuários');
//     }
// };

// const writeUsersFile = async (users) => {
//     try {
//         await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
//     } catch (error) {
//         throw new Error('Erro ao gravar o arquivo de usuários');
//     }
// };

// function embedYouTubeVideo(apiKey, searchTerm) {
//     const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${apiKey}&part=snippet&type=video`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const trailerVideoId = data.items[0].id.videoId;
//             const trailerEmbedUrl = `https://www.youtube.com/embed/${trailerVideoId}`;
//             const iframe = document.createElement('iframe');
//             iframe.src = trailerEmbedUrl;
//             iframe.width = 560;
//             iframe.height = 315;

//             document.body.appendChild(iframe);
//         })
//         .catch(error => console.error('Erro:', error));
// }

// function getMovieInfo(apiKey, movieTitle) {
//     const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             // Verifique se a solicitação foi bem-sucedida
//             if (data.Response === 'True') {
//                 // Atribua cada informação a uma variável
//                 const title = data.Title;
//                 const year = data.Year;
//                 const rated = data.Rated;
//                 const released = data.Released;
//                 const runtime = data.Runtime;
//                 const genre = data.Genre;
//                 const director = data.Director;
//                 const writer = data.Writer;
//                 const actors = data.Actors;
//                 const plot = data.Plot;
//                 const language = data.Language;
//                 const country = data.Country;
//                 const awards = data.Awards;
//                 const poster = data.Poster;
//                 const imdbRating = data.imdbRating;
//                 const ratings = data.Ratings; // Este é um array de avaliações, você pode processá-lo conforme necessário
//             } else {
//                 return res.status(401).send({ error: 'Filme não encontrado. ' });
//             }
//         })
//         .catch(error => console.error('Erro:', error));
// }

// function getMoviePoster(apiKey, movieTitle) {
    
//     const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`;

//     return fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             // Verifique se a solicitação foi bem-sucedida
//             if (data.Response === 'True') {
//                 // Retorna o URL do poster
//                 return data.Poster;
//             } else {
//                 console.error('Filme não encontrado');
//                 return null; // Retorna nulo se o filme não for encontrado
//             }
//         })
//         .catch(error => {
//             console.error('Erro:', error);
//             return null; // Retorna nulo em caso de erro
//         });
// }

// async function RandomMovie(genre) {
//     if (genre === 'rand') {
//       // Se o gênero for 'rand', retorna qualquer filme aleatório
//       return 'http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&type=movie';
//     } else {
//       // Caso contrário, retorna um filme aleatório do gênero especificado
//       const response = await axios.get(`http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&type=movie&genre=${genre}`);
//       const randomIndex = Math.floor(Math.random() * response.data.Search.length);
//       const imdbID = response.data.Search[randomIndex].imdbID;
//       return `http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&i=${imdbID}`;
//     }
//   }

// //FUNÇÃO 2 QUE O CARNEIRO PEDIU
// function getMovieDetails(movieTitle) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             // Obtém informações do filme da API OMDB
//             const omdbUrl = `http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&t=${encodeURIComponent(movieTitle)}`;
//             const omdbResponse = await fetch(omdbUrl);
//             const omdbData = await omdbResponse.json();
            
//             if (omdbData.Response === 'False') {
//                 //Filme não encontrado
//                 return res.status(402).send({ error: 'Filme não encontrado' });
//                 reject('Filme não encontrado');
//                 return;
//             }

//             const synopsis = omdbData.Plot;

//             // Obtém o ID do vídeo do trailer da API do YouTube
//             const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(movieTitle)}%20trailer&key=YOUR_YOUTUBE_API_KEY&part=snippet&type=video`;
//             const youtubeResponse = await fetch(youtubeUrl);
//             const youtubeData = await youtubeResponse.json();
//             const trailerVideoId = youtubeData.items[0]?.id.videoId || null;

//             resolve({ synopsis, trailerVideoId });
//         } catch (error) {
//             return res.status(454).send({ error: 'Erro ao obter detalhes do filme' });
//             reject('Erro ao obter detalhes do filme');
//         }
//     });
// }

// getMoviePoster(apiKey, movieTitle)
//     .then(posterUrl => {
//         if (posterUrl !== null) {
//             console.log('URL do Poster:', posterUrl);
//         } else {
//             console.log('Erro ao obter o poster.');
//         }
//     });

// const addReview = (number,description, user, title)=>{
//     try {
        
//         const reviews = loadReviews();
    
        
//         const newReview = {
//           number,
//           description,
//           user,
//           title,
//         };
//         reviews.push(newReview);
    
        
//         saveReviews(reviews);
    
//         console.log('Review added successfully!');
//       } catch (error) {
//         console.error('Error adding review:', error);
//       }
// };

// const loadReviews = () => {
//     try {
//       const file = fs.readFileSync('reviews.json', 'utf-8');
//       return JSON.parse(file);
//     } catch (error) {
//       return [];
//     }
//   };

// const saveReviews = (reviews) => {
//     const file = JSON.stringify(reviews, null, 2);
//     fs.writeFileSync('reviews.json', file, 'utf-8');
//   };

//   //addReview(1, 'BALDUR GATES GANHAR DE ALAN WAKE É MUITO MEME!', 'Emanuel', 'Titanic');

//   const calculateAverageRating = (title) => {
//     const reviews = loadReviews();
//     const ratingsForMovie = reviews
//       .filter((review) => review.title === title)
//       .map((review) => review.number);
  
//     if (ratingsForMovie.length === 0) {
//       return 0; 
//     }
  
//     const sum = ratingsForMovie.reduce((total, rating) => total + rating, 0);
//     const average = sum / ratingsForMovie.length;
  
//     return average;
//   };

//   const getReviewsDetails = () => {
//     const reviews = loadReviews();
//     return reviews.map(({ user, title, description }) => ({ user, title, description }));
//   };


