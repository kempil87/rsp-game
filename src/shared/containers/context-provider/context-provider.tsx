import { FC, PropsWithChildren, useReducer } from 'react';
import { AppContext } from '../../store/app-context.ts';
import { modalReducer } from '../../store/reducers/modal.ts';
import { gameOptionsReducer } from '../../store/reducers/options.ts';
import { DEFAULT_GAME_OPTIONS } from '../../constants/default-options.ts';

export type ReducerActionUtil<P, T> = { payload: P; type: T };

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [modalStore, dispatchModal] = useReducer(modalReducer, null);

  const [gameOptions, dispatchGameOptions] = useReducer(
    gameOptionsReducer,
    DEFAULT_GAME_OPTIONS
  );

  const values = {
    modalStore,
    dispatchModal,
    gameOptions,
    dispatchGameOptions,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
