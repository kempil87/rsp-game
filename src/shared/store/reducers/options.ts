import { ReducerActionUtil } from '../../../containers/context-provider/context-provider.tsx';
import { GameOptions } from '../../types/game-options.ts';
import {
  BONUS_GAME_OPTIONS,
  DEFAULT_GAME_OPTIONS,
} from '../../constants/default-options.ts';

type GameOptionsState = GameOptions;

export type GameOptionsAction = ReducerActionUtil<
  GameOptions | null,
  'set-bonus' | 'set-basic' | 'toggle'
>;

export const gameOptionsReducer = (
  state: GameOptionsState,
  action: GameOptionsAction
) => {
  if (action.type === 'toggle') {
    return state.length === 3 ? BONUS_GAME_OPTIONS : DEFAULT_GAME_OPTIONS;
  }

  if (action.type === 'set-basic') {
    return DEFAULT_GAME_OPTIONS;
  }

  if (action.type === 'set-bonus') {
    return BONUS_GAME_OPTIONS;
  }

  return state;
};
