import { GameOptions } from '../types/game-options.ts';

export const DEFAULT_GAME_OPTIONS: GameOptions = [
  {
    id: 'rock',
    name: 'Rock',
  },
  {
    id: 'paper',
    name: 'Paper',
  },
  {
    id: 'scissors',
    name: 'Scissors',
  },
];

export const BONUS_GAME_OPTIONS: GameOptions = [
  ...DEFAULT_GAME_OPTIONS,
  {
    id: 'lizard',
    name: 'Lizard',
  },
  {
    id: 'spock',
    name: 'Spock',
  },
];
