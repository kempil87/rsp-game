export interface SpritesMap {
  sprite:
    | 'close'
    | 'lizard'
    | 'logo'
    | 'paper'
    | 'rock'
    | 'scissors'
    | 'spin'
    | 'spock';
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string;
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string;
      }
    >;
  };
} = {
  sprite: {
    filePath: 'sprite.805a1c43.svg',
    items: {
      close: {
        viewBox: '0 0 20 20',
      },
      lizard: {
        viewBox: '0 0 63 60',
      },
      logo: {
        viewBox: '0 0 162 99',
      },
      paper: {
        viewBox: '0 0 49 59',
      },
      rock: {
        viewBox: '0 0 48 48',
      },
      scissors: {
        viewBox: '0 0 51 58',
      },
      spin: {
        viewBox: '0 0 24 24',
      },
      spock: {
        viewBox: '0 0 45 59',
      },
    },
  },
};
