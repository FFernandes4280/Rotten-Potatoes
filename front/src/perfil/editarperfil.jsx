import '../style/Login.css'
import logo from '../assets/tomato.png'

import { Link } from 'react-router-dom';

export default function editarperfil(){
    return(
    <form action="">
         <fieldset>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <label htmlFor="usuario">Usuario</label>
                <input type="text" name='usuario' />
            <label htmlFor="email">Email</label>
                <input type="text" name='email' />
            <label htmlFor="senha">Senha</label>
                <input type="password" name='senha' />
            <button>LOGIN</button>
        </fieldset>
   </form>
   )
}
