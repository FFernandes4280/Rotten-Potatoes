import '../style/Home.css'
import Carousel from '../Caroseu/carosel'
export default function Home(){
    return(
        <>
        <div className='barrasup'>
            <img src="https://www.ubuy.com.br/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vRnJlc2gtU2xpY2luZy1Ub21hdG8tRWFjaF9hMWU4ZTQ0YS0yYjgyLTQ4YWItOWMwOS1iNjg0MjBmNjk1NGMuMDRmNmUwZTg3ODA3ZmM1NDU3ZjU3ZTNlYzA3NzAwNjEuanBlZw.jpg" alt="Logo" />
            <button name='LoginButton'>LOGIN</button>
        </div>
        <div className='carosel'>
            <h2>Filmes</h2>
            <Carousel/>
        </div>
      
        <div className='carosel'>
        <h2>Filmes</h2>
            <Carousel/>
        </div>
        <div className='carosel'>
        <h2>Filmes</h2>
            <Carousel/>
        </div>
        <h2>Filmes</h2>
        <div className='carosel'>
            <Carousel/>
        </div>
        <div className='carosel'>
        <h2>Filmes</h2>
            <Carousel/>
        </div>
        </> 
    )
}