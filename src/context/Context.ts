import { createContext } from 'react';
import { FavoriteType } from '../types';

type ContextProps = {
  data: any
  favorite: FavoriteType[],
  updateFavorite: (obj:FavoriteType) => void,
};

const Context = createContext({} as ContextProps);

export default Context;
