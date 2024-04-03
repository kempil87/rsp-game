import { GameOption } from '../types/game-options.ts';

type Props = {
  ai: GameOption;
  player: GameOption;
};

export const gameWinner = ({ ai, player }: Props) => {
  let resultStr = 'draw';
  let addPoint = null;

  if (!ai || ai.id === player.id) return { resultStr, addPoint };

  const playerPoint = Number(player?.priority?.[ai?.id]);
  const aiPoint = Number(ai?.priority?.[player?.id]);

  if (aiPoint > playerPoint) {
    resultStr = 'ai';
    addPoint = false;
  } else {
    resultStr = 'player';
    addPoint = true;
  }

  return { resultStr, addPoint };
};
