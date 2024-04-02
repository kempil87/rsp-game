export interface SpritesMap {
  sprite: 'close' | 'lizard' | 'logo' | 'paper' | 'rock' | 'scissors' | 'spock';
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
    filePath: 'sprite.9a8f44f9.svg',
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
      spock: {
        viewBox: '0 0 45 59',
      },
    },
  },
};
