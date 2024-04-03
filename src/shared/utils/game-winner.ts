import { SelectedOptions } from '../store/reducers/selected-players-options.ts';

export const gameWinner = ({ ai, player }: SelectedOptions) => {
  return { ai, player };
};
