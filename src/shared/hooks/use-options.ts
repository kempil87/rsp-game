import { useSelector } from './use-selector.ts';
import { OptionIds } from '../types/option.ts';
import { useCallback } from 'react';

export const useOptions = () => {
  const { gameOptions, dispatchSelectedPlayersOptions } = useSelector(
    (store) => store
  );

  const isBonusGame = gameOptions.length > 4;

  const onPickOption = useCallback(
    (id: OptionIds) => {
      dispatchSelectedPlayersOptions({
        type: 'set-player',
        payload: id,
      });
    },
    [dispatchSelectedPlayersOptions]
  );

  return { isBonusGame, gameOptions, onPickOption };
};
