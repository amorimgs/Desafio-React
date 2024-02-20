import React, { useEffect } from 'react'
import Context from '../../context/Context';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import BtnTop from '../../components/BtnTop';


const Home = () => {
  const [count, setCount] = React.useState(8);
  const { data } = React.useContext(Context)
  const [dataOrdenada, setDataOrdenada] = React.useState(data.items);
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
    } else {
      setRadio(e.target.value);
    }
  };

  React.useEffect(() => {
    if (radio === 'Data') {
      setDataOrdenada(data.items);
    } else {
      const dadosFormatados = [...data.items].sort((a:any, b:any) => a.titulo.localeCompare(b.titulo))
      setDataOrdenada(dadosFormatados)
    }
  },[radio])


 return (
    <div className='bg-zinc-100'>
      <Header />
      <Filter radio={radio} input={input} handleChange={handleChange} />
      <main className='flex items-center justify-center flex-wrap gap-4 mx-5 mt-10'>
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
      <BtnTop />
    </div>
  );
}

export default Home;
