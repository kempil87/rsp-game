import { OptionIds } from './option.ts';

export type GameOptions = GameOption[];

export interface GameOption {
  name: string;
  id: OptionIds;
}
