import { Icon } from '../../ui/icon/icon.tsx';
import styles from './app-header.module.css';
export const AppHeader = () => {
  return (
    <header>
      <Icon name='sprite/logo' />

      <div className={styles.scoreWrap}>
        <span>Счет</span>
        <p>32</p>
      </div>
    </header>
  );
};
