import React from 'react'
import Context from '../../context/Context'
import Header from '../../components/Header';
import FavoriteBtn from '../../components/FavoriteBtn';

const Noticias = () => {
  const context = React.useContext(Context);
  const [noticia, setNoticia] = React.useState([]);
  const [count, setCount] = React.useState(10);
  React.useEffect(() => {
    if ( context.data.items ) {
      const noticiaFilter = context.data.items.filter((el:any)=> el.tipo === "Notícia")
      setNoticia(noticiaFilter);
    }
    
  },[context]);

   function calcularDiasPassados(dataString: string): number {
    // Extrair dia, mês e ano da string
    const partesData: string[] = dataString.split('/');
    const dia: number = parseInt(partesData[0]);
    const mes: number = parseInt(partesData[1]) - 1; // O mês começa do zero
    const ano: number = parseInt(partesData[2]);

    // Criar objetos Date para a data atual e a data fornecida
    const dataAtual: Date = new Date();
    const dataFornecida: Date = new Date(ano, mes, dia);

    // Calcular a diferença em milissegundos entre as duas datas
    const diferencaMilissegundos: number = dataAtual.getTime() - dataFornecida.getTime();

    // Converter a diferença em milissegundos para dias
    const diasPassados: number = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

    return diasPassados;
}
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
    <main>
      <Header />
      <h1>Noticias</h1>
      {noticia && noticia.length > 0 && noticia.slice(0, count).map((el:any, index:number) => {
        return (
          <div key={index}>
            <p>{index + 1 }</p>
            <h1>{el.titulo}</h1>
            <p>{el.introducao}</p>
            <p>{calcularDiasPassados(el.data_publicacao.split(' ')[0])} dias atrás</p>
            <a href={el.link} target='_blank'>Ler notícia completa...</a>
              <FavoriteBtn obj={{
                id: el.id,
                titulo: el.titulo,
                introducao: el.introducao,
                data_publicacao: el.data_publicacao, 
                link: el.link,}
                }
              />
          </div>
        )
      })}
    </main>
  )
}

export default Noticias;