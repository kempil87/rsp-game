import { useUrl } from '../../hooks/use-url.ts';
import { PlayField } from '../../components/play-field/play-field.tsx';

export const MainLayout = () => {
  const { paramsEntries } = useUrl();

  if (paramsEntries.view === 'result') {
    return 'Result';
  }

  return <PlayField />;
};
