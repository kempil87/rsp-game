import { OptionIds } from '../types/option.ts';
import { DEFAULT_GAME_OPTIONS } from '../constants/default-options.ts';

export const findOption = (id: OptionIds | null) => {
  return DEFAULT_GAME_OPTIONS.find((el) => el.id === id);
};
