import '../style/Description.css'

export default function Description(){
    return(
     <>
        <div>
            <div className='cartaz'>
                <img src="https://www.intoxianime.com/wp-content/uploads/2023/08/F4M7DiMbgAAuHUV.jpg" alt="Poster" />
            </div>
            <div className='Avaliacao'>
                <img src="https://pixel.cuboup.com/wp-content/uploads/edd/2022/05/Icone-Joinha-Like.jpg" alt="avaliaçãocritico" />
                <img src="https://pixel.cuboup.com/wp-content/uploads/edd/2022/05/Icone-Joinha-Like.jpg" alt="publico" />
            </div>
            <div className='Sinopse'>
                <h2>Sinopse:</h2>
                <p>A maga élfica Frieren e seus bravos companheiros aventureiros derrotaram o Rei Demônio e trouxeram paz à terra. 
                    Com a grande luta terminada, todos eles seguem caminhos separados para viver uma vida tranquila. 
                    Mas como uma elfo, a quase imortal Frieren durará muito mais que o resto de seu antigo bando.
Como ela aceitará a mortalidade de seus amigos? Como ela pode encontrar satisfação em sua própria vida e pode aprender a entender o que a vida significa para os humanos ao seu redor? Frieren inicia uma nova jornada para encontrar a resposta.</p>
            </div>
            <div className='trailer'>
                <h1>Trailer</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Iwr1aLEDpe4?si=n5iE7mbgCF3pRUaF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
       
     </>
    )
}