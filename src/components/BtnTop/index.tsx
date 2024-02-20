import ArrowUp from '../../assets/arrowUp.svg';

const BtnTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className='fixed bottom-5 left-5 bg-yellow-500 rounded-full shadow-lg shadow-yellow-700 p-3' onClick={scrollToTop}><img src={ArrowUp} alt="ArrowUp" /></button>
  )
}

export default BtnTop;