import { Link } from "react-router-dom";

const Inscrever = () => {
  return (
    <div className='bg-yellow-400 h-screen flex items-center justify-center'>
      <div className='bg-zinc-100 w-1/2 rounded-lg p-10'>
        <h1 className='text-3xl font-semibold mb-10'>Junte-se à Nossa Comunidade de Notícias!</h1>
        <p className='w-2/3 mb-10 text-zinc-600 text-xs'>Quer estar sempre atualizado com as últimas notícias, análises e tendências do mundo atual? Não procure mais! Junte-se à nossa comunidade de leitores engajados e receba as principais notícias diretamente na sua caixa de entrada.</p>
        <form>
          <input className='p-3 border-yellow-400 border-4 focus:border-yellow-400' type="email" placeholder='Coloque seu melhor e-mail.'/>
          <button type='button' className='bg-yellow-400 p-4 mb-4 hover:bg-yellow-500'>Inscreva-se</button>
        </form>
          <Link to='/' className='text-blue-400'>Voltar</Link>
      </div>
    </div>
  );
};

export default Inscrever;
