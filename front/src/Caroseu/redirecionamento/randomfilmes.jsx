import {useState,useEffect} from "react";
const imageUrl = import.meta.env.VITE_IMG;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = ( )=> {
  const [topMovies,setTopMovies] = useState([]);
  
  const getTopRatedMovies = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }

  useEffect(()=>{
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}` ;
    getTopRatedMovies(topRatedUrl)
  },[])

} ;