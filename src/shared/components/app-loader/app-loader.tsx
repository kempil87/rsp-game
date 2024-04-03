import { Icon } from '../../ui/icon/icon.tsx';

import styles from './app-loader.module.css';
export const AppLoader = () => {
  return (
    <div className={styles.appLoader}>
      <Icon name={'sprite/logo'} />
    </div>
  );
};
