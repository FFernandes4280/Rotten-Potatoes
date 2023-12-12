import '../style/perfil.css';
import { Link } from 'react-router-dom';

export default function Perfil() {

  return (
    <>
      <div className='perfil'>
        <fieldset>
          <legend>User:</legend>
          <p>Gabriel Carneiro Guedes</p>
        </fieldset>
        <fieldset>
          <legend>Email:</legend>
          <p>gabriel.carneirog14@gmail.com</p>
        </fieldset>
        <Link to="http://localhost:5173/perfiledit"><button>ALTERAR DADOS</button></Link>
      </div>
    </>
  )
}






