import { createContext, Dispatch } from 'react';
import { ModalAction, ModalNames } from './reducers/modal.ts';
import { GameOptions } from '../types/game-options.ts';
import { DEFAULT_GAME_OPTIONS } from '../constants/default-options.ts';
import { GameOptionsAction } from './reducers/options.ts';

export interface Context {
  modalStore: ModalNames | null;
  dispatchModal: Dispatch<ModalAction>;
  gameOptions: GameOptions;
  dispatchGameOptions: Dispatch<GameOptionsAction>;
}

const defaultValues: Context = {
  modalStore: null,
  gameOptions: DEFAULT_GAME_OPTIONS,
  dispatchModal: () => {},
  dispatchGameOptions: () => {},
};

export const AppContext = createContext(defaultValues);
