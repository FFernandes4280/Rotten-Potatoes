import { useState } from 'react'
import './App.css'

function App() {
  return (
   <form action="">
    <img src="https://www.ubuy.com.br/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vRnJlc2gtU2xpY2luZy1Ub21hdG8tRWFjaF9hMWU4ZTQ0YS0yYjgyLTQ4YWItOWMwOS1iNjg0MjBmNjk1NGMuMDRmNmUwZTg3ODA3ZmM1NDU3ZjU3ZTNlYzA3NzAwNjEuanBlZw.jpg" alt="Imagem teste" />
    <label htmlFor="email">Email</label>
    <input type="text" name='email' />
    <label htmlFor="senha">Senha</label>
    <input type="text" name='senha' />
    <button>LOGIN</button>
   </form>
  )
}

export default App