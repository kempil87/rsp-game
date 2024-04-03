import { FC, PropsWithChildren, useReducer } from 'react';
import { AppContext } from '../../shared/store/app-context.ts';
import { modalReducer } from '../../shared/store/reducers/modal.ts';
import { gameOptionsReducer } from '../../shared/store/reducers/options.ts';
import { DEFAULT_GAME_OPTIONS } from '../../shared/constants/default-options.ts';
import { selectedPlayerOptionsReducer } from '../../shared/store/reducers/selected-players-options.ts';

export type ReducerActionUtil<P, T> = { payload: P; type: T };

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [modalStore, dispatchModal] = useReducer(modalReducer, null);

  const [gameOptions, dispatchGameOptions] = useReducer(
    gameOptionsReducer,
    DEFAULT_GAME_OPTIONS
  );

  const [selectedPlayersOptions, dispatchSelectedPlayersOptions] = useReducer(
    selectedPlayerOptionsReducer,
    {
      ai: null,
      player: null,
    }
  );

  const values = {
    modalStore,
    dispatchModal,
    gameOptions,
    dispatchGameOptions,
    selectedPlayersOptions,
    dispatchSelectedPlayersOptions,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
