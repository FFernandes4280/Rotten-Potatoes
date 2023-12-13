import '../style/Description.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Description(){
    const {nome} = useParams();
    console.log(nome);
    return(
     <>
        <div>
            <div className='dados'>
                <div className='fundo'>
                    <div className='cartaz'>
                        <img src="https://www.intoxianime.com/wp-content/uploads/2023/08/F4M7DiMbgAAuHUV.jpg" alt="Poster" />
                        <h2>Sousou no frierem</h2>
                    </div>
                    <div className='Avaliacao'>
                        <h3><Link to="http://localhost:5173/assessments">10</Link></h3>
                    </div>
                </div>
                <div className='Sinopse'>
                    <h2>Sinopse:</h2>
                    <p>A maga élfica Frieren e seus bravos companheiros aventureiros derrotaram o Rei Demônio e trouxeram paz à terra. 
                        Com a grande luta terminada, todos eles seguem caminhos separados para viver uma vida tranquila. 
                        Mas como uma elfo, a quase imortal Frieren durará muito mais que o resto de seu antigo bando.
                        Como ela aceitará a mortalidade de seus amigos? Como ela pode encontrar satisfação em sua própria vida e pode aprender a entender o que a vida significa para os humanos ao seu redor? Frieren inicia uma nova jornada para encontrar a resposta.</p>
                </div>
            </div>
            <div className='trailer'>
                <h1>Trailer</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Iwr1aLEDpe4?si=n5iE7mbgCF3pRUaF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
       
     </>
    )
}