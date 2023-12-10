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