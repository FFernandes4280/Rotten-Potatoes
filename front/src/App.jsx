import './style/header.css';
import logo from './assets/tomato.png'
import { Link } from 'react-router-dom';
import ClickableImage from "./Caroseu/redirecionamento/redirecionamento"

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <section className='HeaderLogin'>
        <header className='titulo'>
        <div className='barrasup'>
            <ClickableImage
            imageUrl={logo}
            alt={"logo"}
            linkTo={"http://localhost:5173"}
            />
            <Link to="http://localhost:5173/login"><button name='LoginButton'>PERFIL</button></Link>
         </div>
        </header>
        <Outlet/>
    </section>
    </>
  )
}

export default App




