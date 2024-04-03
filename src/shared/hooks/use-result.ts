import { useSelector } from './use-selector.ts';
import { DEFAULT_GAME_OPTIONS } from '../constants/default-options.ts';
import { useEffect, useMemo, useState } from 'react';
import { randomId } from '../utils/random-id.ts';
import { findOption } from '../utils/find-option.ts';
import { gameWinner } from '../utils/game-winner.ts';
import { useSessionStorage } from './use-session-storage.ts';

const DELAY = 2000;

const RESULT_STR: Record<string, string> = {
  draw: 'Draw :)',
  ai: 'AI :(',
  player: 'Great You',
};

export const useResult = () => {
  const [scoreUserPoint, updateScorePoint] = useSessionStorage('user-score', 0);
  const { selectedPlayersOptions, dispatchSelectedPlayersOptions } =
    useSelector((store) => store);

  const [isLoading, setIsLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState<string | null>(null);

  const selectPlayerOption = findOption(selectedPlayersOptions.player);
  const selectAiOption = findOption(selectedPlayersOptions.ai);

  const id = useMemo(() => randomId(), []);

  const result = gameWinner({ ai: selectAiOption, player: selectPlayerOption });

  const playAgain = () => {
    dispatchSelectedPlayersOptions({ type: 'reset', payload: 'rock' });
  };

  useEffect(() => {
    dispatchSelectedPlayersOptions({
      type: 'set-ai',
      payload: DEFAULT_GAME_OPTIONS[id - 1].id,
    });

    setResultTitle(RESULT_STR[result.resultStr]);

    if (result.addPoint === null) return;

    if (result.addPoint) {
      updateScorePoint(scoreUserPoint + 1);
    } else {
      updateScorePoint(scoreUserPoint - 1);
    }
  }, [dispatchSelectedPlayersOptions, id, result.resultStr]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, DELAY);

    return () => clearTimeout(timeout);
  }, []);

  return {
    selectPlayerOption,
    playAgain,
    resultTitle,
    selectAiOption,
    isLoading,
  };
};
