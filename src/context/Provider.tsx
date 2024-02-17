import React from 'react';
import Context from './Context';
import { FavoriteType } from '../types';

type ProviderProps = {
  children: React.ReactNode;
};

function Provider({ children }: ProviderProps) {
  const [data, setData] = React.useState([]);
  const [favorite, setFavorite] = React.useState<FavoriteType[]>([]);

  // Buscar Noticias
  React.useEffect(() => {
    const fetchData = async () => {
     const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
     const json = await response.json();
     setData(json); 
    };
    fetchData();
  },[]);

  // Setar localStorage no inicio da aplicacao
  React.useEffect(() => {
    const checkLocalStorage = () => {
      const favoriteLocalStorage = window.localStorage
        .getItem('favorites');
      if (favoriteLocalStorage) {
        const parseJson = JSON.parse(favoriteLocalStorage);
        setFavorite(parseJson);  
      } else {
        window.localStorage.setItem('favorites', JSON.stringify(favorite))
    }
      }
    checkLocalStorage();
  },[]);

  // Atualizar lista de favoritos
  const updateFavorite = (obj:FavoriteType) => {
    const {id} = obj;
    const check = favorite.some((item) => item.id === id);
    if (!check) {
      setFavorite([...favorite, obj]);
    } else {
      const newFavorite = favorite.filter((el) => el.id !== id);
      setFavorite(newFavorite);
    }
  };

  // Atualizar localStorage
  React.useEffect(() => {
    if(favorite.length > 0) window.localStorage.setItem('favorites', JSON.stringify(favorite))     
  },[favorite])

  // Dados exportados para toda aplicacao
  const dados = {
    data,
    favorite,
    updateFavorite
  };

  return (
    <Context.Provider value={ dados }>
      <div>
        { children }
      </div>
    </Context.Provider>
  );
}

export default Provider;
