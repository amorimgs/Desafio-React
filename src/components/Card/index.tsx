import FavoriteBtn from '../FavoriteBtn'
type CardProps = {
  dados: {
    id:number;
    titulo:string;
    introducao:string;
    data_publicacao:string;
    link:string;
  }
}
const Card = ({dados}:CardProps) => {
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
    <div className='bg-white w-96 h-96 p-5 shadow-zinc-500 shadow-md flex flex-col gap-5'>
              <h1 className='font-semibold'>{dados.titulo}</h1>
              <p className='text-sm flex-1'>{dados.introducao}</p>
              <div className='flex items-center justify-between'>
                <p>{calcularDiasPassados(dados.data_publicacao.split(' ')[0])} dias atrás</p>
                <a href={dados.link} target='_blank' className='bg-yellow-500 text-zinc-900 font-semibold p-3 text-xs rounded-md'>LER NOTICIA COMPLETA</a>
              </div>
                <FavoriteBtn obj={{
                  id: dados.id,
                  titulo: dados.titulo,
                  introducao: dados.introducao,
                  data_publicacao: dados.data_publicacao, 
                  link: dados.link,}
                  }
                />
            </div>
  )
}

export default Card