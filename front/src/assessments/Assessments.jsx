import CarouselAva from '../Caroseu/caroselavali'
import '../style/Assessments.css'
export default function Assessments(){
    return(
        <>
        <div className='barrasup'>
            <img src="https://www.ubuy.com.br/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vRnJlc2gtU2xpY2luZy1Ub21hdG8tRWFjaF9hMWU4ZTQ0YS0yYjgyLTQ4YWItOWMwOS1iNjg0MjBmNjk1NGMuMDRmNmUwZTg3ODA3ZmM1NDU3ZjU3ZTNlYzA3NzAwNjEuanBlZw.jpg" alt="Logo" />
                <button>LOGIN</button>
        </div>
            <div className='total'>
            <div className='lateral'>
                <img src="https://www.intoxianime.com/wp-content/uploads/2023/08/F4M7DiMbgAAuHUV.jpg" alt="Poster"  className='imgbaner'/>
                <h2>Sosou no Frierem</h2>
                <img src="https://pixel.cuboup.com/wp-content/uploads/edd/2022/05/Icone-Joinha-Like.jpg" alt="avaliaçãocritico" className='imglike'/>
            </div>
            <div className='caroselhor'> 
                <CarouselAva/>
            </div>
        </div>
        </> 
    )
}