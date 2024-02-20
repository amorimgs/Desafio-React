import React from 'react'
import Context from '../../context/Context'
import Header from '../../components/Header';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import BtnTop from '../../components/BtnTop';

const Release = () => {
  const context = React.useContext(Context);
  const [release, setRelease] = React.useState([]);
  const [count, setCount] = React.useState(8);
  const [dataOrdenada, setDataOrdenada] = React.useState(release);
  const [radio, setRadio] = React.useState('Data');
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    if ( context.data.items ) {
    const releaseFilter = context.data.items.filter((el:any)=> el.tipo === 'Release')
    setRelease(releaseFilter);
  }

    
  },[]);

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

  React.useEffect(() => {
    setDataOrdenada(release)
  },[release])
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'input') {
      setInput(e.target.value);
    } else {
      setRadio(e.target.value);
    }

    
  };
  React.useEffect(() => {
    if (radio === 'Data') {
      setDataOrdenada(release);
    } else if (radio === 'Alfabetica') {
      const dadosFormatados = [...release].sort((a:any, b:any) => a.titulo.localeCompare(b.titulo))
      setDataOrdenada(dadosFormatados)
    }
  },[radio])

  return (
    <div>
      <Header />
      <Filter radio={radio} input={input} handleChange={handleChange} />
      <div className='flex items-center justify-center flex-wrap gap-4 mx-5 mt-10'>
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
      </div>
      <BtnTop />  
    </div>
  )
}

export default Release