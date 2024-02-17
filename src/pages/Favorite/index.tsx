import React from 'react'
import Header from '../../components/Header'
import FavoriteBtn from '../../components/FavoriteBtn';
import Context from '../../context/Context';

const Favorite = () => {
  const context = React.useContext(Context);

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
  return (
    <div>
      <Header />
      Favorite
      {context.favorite && context.favorite.length > 0 && context.favorite.map((el:any, index:number) => {
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

    </div>
  )
}

export default Favorite