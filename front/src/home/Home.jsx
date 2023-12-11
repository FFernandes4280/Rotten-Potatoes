import '../style/Home.css'
import Carousel from '../Caroseu/carosel'
export default function Home(){
    return(
        <>
        <div className='carosel'>
            <h2>Filmes</h2>
            <Carousel/>
        </div>

        <div className='carosel'>
        <h2>Filmes de terror</h2>
            <Carousel/>
        </div>

        <div className='carosel'>
        <h2>Filmes de comédia</h2>
            <Carousel/>
        </div>

        
        <div className='carosel'>
        <h2>Filmes de aventura</h2>
            <Carousel/>
        </div>

        <div className='carosel'>
        <h2>Filmes de ficção científica</h2>
            <Carousel/>
        </div>

        </> 
    )
}