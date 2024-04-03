import { PlayField } from '../../shared/components/play-field/play-field.tsx';
import { useSelector } from '../../shared/hooks/use-selector.ts';
import { ResultField } from '../../shared/components/result-field/result-field.tsx';

export const MainLayout = () => {
  const { selectedPlayersOptions } = useSelector((store) => store);

  if (selectedPlayersOptions.player) {
    return <ResultField />;
  }

  return <PlayField />;
};
