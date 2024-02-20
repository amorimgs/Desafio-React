import { Link } from 'react-router-dom';

function Header() {
  const location = window.location.pathname;
  
  return (
    <header className='bg-yellow-400 p-5'>
    <div className='flex flex-col items-center gap-10'>
      <h1 className='text-zinc-700 font-bold text-7xl'>News</h1>
      <Link to='/inscrever' className='bg-white p-2 rounded-md text-zinc-500 hover:bg-slate-100 hover:text-zinc-900 text-center max-w-52'>INSCREVA-SE</Link>
    </div>
     <nav>
        <ul className='mt-10 flex items-center gap-4 justify-center flex-wrap'>
          <li><Link to="/" className={`font-bold p-2 rounded-md  bg-white text-sm hover:text-zinc-700 ${location === '/' ? 'text-zinc-700' : 'text-zinc-500'}`}>Todos</Link></li>
          <li><Link to="/noticia" className={`font-bold p-2 rounded-md  bg-white text-sm hover:text-zinc-700 ${location === '/noticia' ? 'text-zinc-700' : 'text-zinc-500'}`}>Notícia</Link></li>
          <li><Link to="/release" className={`font-bold p-2 rounded-md  bg-white text-sm hover:text-zinc-700 ${location === '/release' ? 'text-zinc-700' : 'text-zinc-500'}`}>Release</Link></li>
          <li><Link to="/favorito" className={`font-bold p-2 rounded-md  bg-white text-sm hover:text-zinc-700 ${location === '/favorito' ? 'text-zinc-700' : 'text-zinc-500'}`}>Favoritos</Link></li>
        </ul>
     </nav>
    </header>
  );
}

export default Header;
