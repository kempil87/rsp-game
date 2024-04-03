import { createContext, Dispatch } from 'react';
import { ModalAction, ModalNames } from './reducers/modal.ts';
import { GameOptions } from '../types/game-options.ts';
import { DEFAULT_GAME_OPTIONS } from '../constants/default-options.ts';
import { GameOptionsAction } from './reducers/options.ts';
import {
  SelectedOptions,
  SelectedPlayersOptionsAction,
} from './reducers/selected-players-options.ts';

export interface Context {
  modalStore: ModalNames | null;
  dispatchModal: Dispatch<ModalAction>;
  gameOptions: GameOptions;
  dispatchGameOptions: Dispatch<GameOptionsAction>;
  selectedPlayersOptions: SelectedOptions;
  dispatchSelectedPlayersOptions: Dispatch<SelectedPlayersOptionsAction>;
}

const defaultValues: Context = {
  modalStore: null,
  gameOptions: DEFAULT_GAME_OPTIONS,
  dispatchModal: () => {},
  dispatchGameOptions: () => {},
  selectedPlayersOptions: {
    ai: null,
    player: null,
  },
  dispatchSelectedPlayersOptions: () => {},
};

export const AppContext = createContext(defaultValues);
