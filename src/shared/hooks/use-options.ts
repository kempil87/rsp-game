import { useSelector } from './use-selector.ts';

export const useOptions = () => {
  const gameOptions = useSelector((store) => store.gameOptions);
  const isBonusGame = gameOptions.length > 4;

  return { isBonusGame, gameOptions };
};
