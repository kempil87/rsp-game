import { useSelector } from './use-selector.ts';
import { DEFAULT_GAME_OPTIONS } from '../constants/default-options.ts';
import { useEffect, useMemo, useState } from 'react';
import { randomId } from '../utils/random-id.ts';
import { findOption } from '../utils/find-option.ts';

const DELAY = 2000;

export const useResult = () => {
  const { selectedPlayersOptions, dispatchSelectedPlayersOptions } =
    useSelector((store) => store);
  const [isLoading, setIsLoading] = useState(true);

  const selectPlayerOption = findOption(selectedPlayersOptions.player);
  const selectAiOption = findOption(selectedPlayersOptions.ai);

  const id = useMemo(() => randomId(), []);

  useEffect(() => {
    dispatchSelectedPlayersOptions({
      type: 'set-ai',
      payload: DEFAULT_GAME_OPTIONS[id - 1].id,
    });
  }, [dispatchSelectedPlayersOptions, id]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, DELAY);
  }, []);

  return { selectPlayerOption, selectAiOption, isLoading };
};
