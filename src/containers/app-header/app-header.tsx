import { Icon } from '../../shared/ui/icon/icon.tsx';
import styles from './app-header.module.css';
import { useSessionStorage } from '../../shared/hooks/use-session-storage.ts';
export const AppHeader = () => {
  const [userScorePoints] = useSessionStorage('user-score', 0);

  return (
    <header>
      <Icon name='sprite/logo' />

      <div className={styles.scoreWrap}>
        <span>Score</span>
        <p>{userScorePoints}</p>
      </div>
    </header>
  );
};
