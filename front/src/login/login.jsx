import '../style/Login.css'

import { Link } from 'react-router-dom';

export default function Login(){
    return(
    <form action="">
    <img src="https://www.ubuy.com.br/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vRnJlc2gtU2xpY2luZy1Ub21hdG8tRWFjaF9hMWU4ZTQ0YS0yYjgyLTQ4YWItOWMwOS1iNjg0MjBmNjk1NGMuMDRmNmUwZTg3ODA3ZmM1NDU3ZjU3ZTNlYzA3NzAwNjEuanBlZw.jpg" alt="Imagem teste" />
    <label htmlFor="email">Email</label>
    <input type="text" name='email' />
    <label htmlFor="senha">Senha</label>
    <input type="text" name='senha' />
    <button>LOGIN</button>
    <div>
        <p>Não tem login? <Link to="http://localhost:5174/register">Registre-se</Link></p>
    </div>
   </form>
   )
}
