import CarouselAva from '../Caroseu/caroselavali'
import '../style/Assessments.css'
import { Link } from 'react-router-dom';
import imgcarosel from '../Caroseu/imgcarosel.jsx'

export default function Assessments(){
    return(
        <>
            <div className='total'>
            <div className='lateral'>
                <img src="https://www.intoxianime.com/wp-content/uploads/2023/08/F4M7DiMbgAAuHUV.jpg" alt="Poster"  className='imgbaner'/>
                <h2>Sousou no Frierem</h2>
                <imgcarosel/>
                <h3><Link to="http://localhost:5173/avaliation">9.9</Link></h3>
            </div>
            <div className='caroselhor'> 
                <CarouselAva/>
            </div>
        </div>
        </> 
    )
}