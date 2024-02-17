import React, { useEffect } from 'react'
import Context from '../../context/Context';
import Header from '../../components/Header';
import Card from '../../components/Card';

const Home = () => {
  const [count, setCount] = React.useState(8);
  const { data } = React.useContext(Context)
  const [dataOrdenada, setDataOrdenada] = React.useState(data.items)
  const [radio, setRadio] = React.useState('Data');
  const [input, setInput] = React.useState('');
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
  useEffect(() => {
    setDataOrdenada(data.items)
  },[data])
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'input') {
      setInput(e.target.value);
    }
    setRadio(e.target.value);
  };

  React.useEffect(() => {
    if (radio === 'Data') {
      setDataOrdenada(data.items);
    } else {
      const receitasFormatadas = [...data.items].sort((a:any, b:any) => a.titulo.localeCompare(b.titulo))
      setDataOrdenada(receitasFormatadas)
    }
  },[radio])


 return (
    <div className='bg-zinc-100'>
      <Header />
      <div className='flex items-center justify-between mx-20 my-10'>
        
        <input id='input' type="text" onChange={handleChange} placeholder='Busca por Titulo' className='p-4 w-1/2 rounded-md placeholder:text-zinc-900 bg-yellow-400' />
        <div className='flex items-center gap-10'>
          <p>Ordenar: </p>
          <label className='text-xl'><input className='mr-1' type="radio" value="Data" checked={radio === 'Data'} onChange={handleChange} />Data</label>
          <label className='text-xl'><input className='mr-1' type="radio" value="Alfabetica" checked={radio === 'Alfabetica'} onChange={handleChange} />Alfabetica</label>
        </div>
      </div>
      <main className='flex items-center justify-between flex-wrap gap-4 mx-20 mt-20'>
        {dataOrdenada && dataOrdenada.length > 0 && dataOrdenada.filter((el:any)=>
          el.titulo.toLowerCase().includes(input.toLowerCase())
        ).slice(0, count).map((el:any, index:number) => {
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
      </main>
    </div>
  );
}

export default Home;
