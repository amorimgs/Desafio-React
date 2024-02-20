import React from 'react';
import { Link } from "react-router-dom";

const Inscrever = () => {
  const [cadatrado, setCadatrado] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const ValidarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };


  return (
    <div className='bg-zinc-100 h-screen flex items-center justify-center'>
      <div className='px-4 text-center md:w-1/2'>
        <h1 className='text-4xl font-semibold my-10'>Junte-se à Nossa Comunidade de Notícias!</h1>
        <p className='mb-10 text-sm text-zinc-600'>Quer estar sempre atualizado com as últimas notícias, análises e tendências do mundo atual? Não procure mais! Junte-se à nossa comunidade de leitores engajados e receba as principais notícias diretamente na sua caixa de entrada.</p>
        {!cadatrado && <form className="flex flex-col">
          <input className='text-center p-3 border-yellow-400 border-4 focus:border-yellow-400' value={email} onChange={handleChange} type="email" placeholder='Coloque seu melhor e-mail.'/>
          <button disabled={!ValidarEmail(email)} onClick={ () => setCadatrado(true) } type='button' className='bg-yellow-400 p-4 hover:bg-yellow-500 mb-5 disabled:bg-yellow-500'>INSCREVA-SE</button>
        </form>}
          {cadatrado && <p className="text-green-800 mb-5">E-mail Cadastrado!</p>}
          <Link to="/" className='text-blue-400'>VOLTAR</Link>
      </div>
    </div>
  );
};

export default Inscrever;
