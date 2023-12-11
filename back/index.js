const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs/promises'); 

const SECRET_KEY = 'BaldurGatesGanharDeALANWAKE2=MEME'; 
const USERS_FILE = 'usuarios.json';

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
