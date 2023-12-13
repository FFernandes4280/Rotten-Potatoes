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

let logged = 0;

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log('Servidor na porta 3003');
});

app.post('/perfiledit', async (req, res) => {
    console.log('Estou no editando o perfil');
    //extraindo os dados do formulário para criacao do usuario
    const {username, email, password} = req.body; 
    //Abre o arquivo que simula o bd
    const jsonPath = path.join(__dirname, '.', 'db', 'usuarios.json');
    const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));
    const id = logged;
    usuariosCadastrados.splice(logged - 1, 1); 
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
        `Alterações salvas.`
        );
});

app.post('/perfil', async (req, res) => {
    console.log('Estou no perfil');
    console.log(logged);
    try {
        const jsonPath = path.join(__dirname, 'db', 'usuarios.json');
        const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        for(user of usuariosCadastrados){
            if(user.id === logged){
                return res.json({ user });
            }
        }
        return res.status(401).send({ error: 'Usuário não encontrado' });
    } catch (error) {
        console.error('Error fetching profile data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/login', async (req, res)=>{
    const {email, password} = req.body; 
    console.log('Estou no login');
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
