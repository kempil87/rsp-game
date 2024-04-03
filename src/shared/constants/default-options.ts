import { GameOptions } from '../types/game-options.ts';

export const DEFAULT_GAME_OPTIONS: GameOptions = [
  {
    id: 'rock',
    name: 'Rock',
    priority: {
      paper: 0,
      scissors: 1,
      rock: null,
      spock: null,
      lizard: null,
    },
  },
  {
    id: 'paper',
    name: 'Paper',
    priority: {
      scissors: 0,
      rock: 1,
      paper: null,
      spock: null,
      lizard: null,
    },
  },
  {
    id: 'scissors',
    name: 'Scissors',
    priority: {
      paper: 1,
      rock: 0,
      scissors: null,
      spock: null,
      lizard: null,
    },
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
