import './style/header.css';
import logo from './assets/tomato.png'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <section className='HeaderLogin'>
        <header className='titulo'>
        <div className='barrasup'>
        <img src={logo} alt="Logo" />
            <button name='LoginButton'>LOGIN</button>
         </div>
        </header>
        <Outlet/>
    </section>
    </>
  )
}

export default App




