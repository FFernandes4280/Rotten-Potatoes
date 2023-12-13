import React, { useState, useEffect } from 'react';
import ClickableImage from './redirecionamento.jsx';

const YourComponent = ({genre}) => {
  let link;
    if(genre=="37999"){
      link = `https://api.jikan.moe/v4/anime/37999/recommendations`;
    }else if(genre=="6"){
      link= `https://api.jikan.moe/v4/anime/6/recommendations`;
    }else if(genre=="35120"){
      link= `https://api.jikan.moe/v4/anime/339/recommendations`;
    }else if(genre=="21"){
      link= `https://api.jikan.moe/v4/anime/21/recommendations`;
    }else if(genre=="5"){
      link= `https://api.jikan.moe/v4/anime/5/recommendations`;
    }
    

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao obter os dados da API:', error.message);
      }
    };

    fetchData();
  }, [genre]);

  if (!data) {
    return <p>Carregando...</p>;
  }

  // Escolher aleatoriamente um índice do array de dados
  const randomIndex = Math.floor(Math.random() * data.data.length);

  // Extrair a URL da imagem e o texto alternativo (alt) do item escolhido aleatoriamente
  const imageUrl = data.data[randomIndex].entry.images.jpg.image_url;
  const altText = data.data[randomIndex].entry.title;

  return (
    <div>
      <div>
        <ClickableImage
          imageUrl={imageUrl}
          alt={altText}
          linkTo={"http://localhost:5173/description"}
        />
      </div>
    </div>
  );
};

export default YourComponent;
