import React from 'react'
import Context from '../../context/Context'
import Header from '../../components/Header';
import Card from '../../components/Card';

const Noticias = () => {
  const context = React.useContext(Context);
  const [noticia, setNoticia] = React.useState([]);
  const [count, setCount] = React.useState(8);
  React.useEffect(() => {
    if ( context.data.items ) {
      const noticiaFilter = context.data.items.filter((el:any)=> el.tipo === "Notícia")
      setNoticia(noticiaFilter);
    }
    
  },[context]);

  React.useEffect(() => {
    const handleScroll = async () => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
      if( scrollTop + clientHeight + 1 >= scrollHeight) {
        setCount((prevCount)=> prevCount +10);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <div>
      <Header />
      <div className='flex items-center justify-between flex-wrap gap-4 mx-20 mt-20'>
        {noticia && noticia.length > 0 && noticia.slice(0, count).map((el:any, index:number) => {
          return (
            <Card key={index} dados={ 
              {id: el.id,
              titulo: el.titulo,
              introducao: el.introducao,
              data_publicacao: el.data_publicacao,
              link: el.link,}
            }/>
          )
        })}
      </div>
    </div>
  )
}

export default Noticias;
