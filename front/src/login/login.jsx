import '../style/Login.css'
import logo from '../assets/tomato.png'

import { Link } from 'react-router-dom';

export default function Login(){
    return(
    <form action="">
        <div>
        <img src={logo} alt="Logo" />
        </div>
        <label htmlFor="email">Email</label>
            <input type="text" name='email' />
        <label htmlFor="senha">Senha</label>
            <input type="text" name='senha' />

        <button>LOGIN</button>
        <div>
            <p>Não tem login? <Link to="http://localhost:5173/register">Registre-se</Link></p>
        </div>
   </form>
   )
}
