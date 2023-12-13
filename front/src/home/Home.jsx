import '../style/Home.css'
import Carousel from '../Caroseu/carosel'
const linkTo = "http://http://localhost:5173/description"
export default function Home(){
    return(
        <>
        <div className='carosel'>
            <h2>Comedia</h2>
            <Carousel
            genere={'37999'}/>
        </div>

        <div className='carosel'>
        <h2>Terror</h2>
            <Carousel
            genere={"35120"}/>
        </div>

        <div className='carosel'>
        <h2>Ação</h2>
            <Carousel
            genere={"6"}/>
        </div>

        
        <div className='carosel'>
        <h2>Filmes de aventura</h2>
            <Carousel
            genere={"21"}/>
        </div>

        <div className='carosel'>
        <h2>Sci-fi</h2>
            <Carousel
            genere={"5"}/>
        </div>

        </> 
    )
}