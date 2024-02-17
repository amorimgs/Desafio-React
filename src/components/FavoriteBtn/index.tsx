import React from 'react';
import BlackHeartIcon from '../../assets/redHeartIcon.svg';
import WhiteHeartIcon from '../../assets/whiteHeartIcon.svg';
import Context from '../../context/Context';
import { FavoriteType } from '../../types';

function FavoriteBtn({ obj }: { obj: FavoriteType }) {
  const [checkFavorite, setCheckFavorite] = React.useState<boolean>(false);

  const {favorite, updateFavorite} = React.useContext(Context);

  React.useEffect(() => {
    const check = favorite.some((item: any) => item.id === obj.id)
    setCheckFavorite(check);
  },[favorite])
  
  const handleClick = () => {
    updateFavorite(obj);
  };
  return (
    <button
      className='self-end'
      onClick={ () => {
        handleClick();
      } }
    >
      <img
        data-testid="favorite-btn"
        src={ checkFavorite ? BlackHeartIcon : WhiteHeartIcon }
        alt="FavoriteIcon"
      />
    </button>
  );
}

export default FavoriteBtn;
