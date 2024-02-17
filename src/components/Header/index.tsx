import { Link } from 'react-router-dom';

function Header() {
  const location = window.location.pathname;
  
  return (
    <header className='h-80 bg-yellow-400'>
    <div className='flex items-start justify-between pt-10 px-20'>
      <h1 className='text-zinc-50 font-bold text-9xl'>News...!</h1>
      <Link to='/inscrever' className='bg-white p-4 rounded-md text-zinc-500 hover:bg-slate-100 hover:text-zinc-900'>Inscrever</Link>
    </div>
     <nav className='bg-white mx-20 pl-10'>
        <ul className='mt-20 flex items-center gap-10 py-4'>
          <li><Link to="/" className={`font-bold text-xl hover:text-zinc-700 ${location === '/' ? 'text-zinc-700' : 'text-zinc-500'}`}>Mais recentes</Link></li>
          <li><Link to="/noticia" className={`font-bold text-xl hover:text-zinc-700 ${location === '/noticia' ? 'text-zinc-700' : 'text-zinc-500'}`}>Notícia</Link></li>
          <li><Link to="/release" className={`font-bold text-xl hover:text-zinc-700 ${location === '/release' ? 'text-zinc-700' : 'text-zinc-500'}`}>Release</Link></li>
          <li><Link to="/favorito" className={`font-bold text-xl hover:text-zinc-700 ${location === '/favorito' ? 'text-zinc-700' : 'text-zinc-500'}`}>Favoritos</Link></li>
        </ul>
     </nav>
    </header>
  );
}

export default Header;
