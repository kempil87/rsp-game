import { ReducerActionUtil } from '../../../containers/context-provider/context-provider.tsx';
import { OptionIds } from '../../types/option.ts';

export interface SelectedOptions {
  ai: OptionIds | null;
  player: OptionIds | null;
}

export type SelectedPlayersOptionsAction = ReducerActionUtil<
  OptionIds,
  'set-player' | 'set-ai'
>;

export const selectedPlayerOptionsReducer = (
  state: SelectedOptions,
  action: SelectedPlayersOptionsAction
): SelectedOptions => {
  if (action.type === 'set-player') {
    return { ...state, player: action.payload };
  }

  if (action.type === 'set-ai') {
    return { ...state, ai: action.payload };
  }

  return state;
};
