import '../style/Avaliation.css'

export default function Avaliation(){
    return(
        <>
        <div className='barrasup'>
            <img src="https://www.ubuy.com.br/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vRnJlc2gtU2xpY2luZy1Ub21hdG8tRWFjaF9hMWU4ZTQ0YS0yYjgyLTQ4YWItOWMwOS1iNjg0MjBmNjk1NGMuMDRmNmUwZTg3ODA3ZmM1NDU3ZjU3ZTNlYzA3NzAwNjEuanBlZw.jpg" alt="Logo" />
            <button>LOGIN</button>
        </div>
        <form action="">
            <div>
                <img src="https://www.intoxianime.com/wp-content/uploads/2023/08/F4M7DiMbgAAuHUV.jpg" alt="Poster" />
                <label htmlFor="avaliação"></label>
                <input type="text" name='avaliação'/>
            </div>
            <div>
                <button>AVALIAR</button>
            </div>
        </form>
        </>
    )
}