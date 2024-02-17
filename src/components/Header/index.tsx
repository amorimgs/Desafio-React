import { Link } from 'react-router-dom';
import '../../index.css'

function Header() {
  const clasTailw = 'text-white'
  return (
    <header className='h-80 bg-yellow-400'>
     <h1 className='pt-10 pl-10 text-white font-bold text-9xl'>News...!</h1>
     <nav>
        <ul className='mt-20 pl-10 flex items-center gap-10'>
          <li><Link to="/" className='text-white font-bold text-xl hover:underline-offset-1'>Mais recentes</Link></li>
          <li><Link to="/noticia" className={clasTailw}>Notícia</Link></li>
          <li><Link to="/release">Release</Link></li>
          <li><Link to="/favorito">Favoritos</Link></li>
        </ul>
     </nav>
    </header>
  );
}

export default Header;
