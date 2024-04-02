import { useContext } from 'react';
import { AppContext, Context } from '../store/app-context.ts';

export const useSelector = <U>(callback: (store: Context) => U): U => {
  const context = useContext(AppContext)!;

  return callback(context as Context);
};
