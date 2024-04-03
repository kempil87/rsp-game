import { OptionIds } from '../types/option.ts';
import { DEFAULT_GAME_OPTIONS } from '../constants/default-options.ts';
import { GameOption } from '../types/game-options.ts';

export const findOption = (id: OptionIds | null): GameOption => {
  return DEFAULT_GAME_OPTIONS.find((el) => el.id === id)!;
};
