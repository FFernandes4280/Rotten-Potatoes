import '../style/Login.css'
import logo from '../assets/tomato.png'

export default function Register(){
    return(
    <form action="">
        <div>
        <img src={logo} alt="Logo" />
        </div>
        <label htmlFor="email">Email</label>
            <input type="text" name='email' />
        <label htmlFor="senha">Senha</label>
            <input type="text" name='senha' />
        <label htmlFor="conf_senha">Confirmar Senha</label>
            <input type="text" name='conf_senha' />
        
        <button>LOGIN</button>
   </form>)
}
