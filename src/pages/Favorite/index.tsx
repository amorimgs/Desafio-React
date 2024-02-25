import React from 'react'
import Header from '../../components/Header'
import Context from '../../context/Context';
import Card from '../../components/Card';

const Favorite = () => {
  const context = React.useContext(Context);

  return (
    <div>
      <Header />
      <div className='flex items-center justify-between flex-wrap gap-4 mx-5 mt-10'>
        {(context.favorite && context.favorite.length > 0) ? context.favorite.map((el:any, index:number) => {
          return (
            <Card key={index} dados={ 
              {id: el.id,
              titulo: el.titulo,
              introducao: el.introducao,
              data_publicacao: el.data_publicacao,
              link: el.link,}
            }/>
          )
        }) : <h1 className='text-5xl'>Nenhuma notícia favoritada!</h1>}
      </div>
    </div>
  )
}

export default Favorite
