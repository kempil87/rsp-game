import triangleImage from '../../../../public/images/bg-triangle.svg';
import pentagonImage from '../../../../public/images/bg-pentagon.svg';
import styles from './play-field.module.css';
import { useOptions } from '../../hooks/use-options.ts';

const RULES_IMAGE: Record<string, string> = {
  'bonus-game': pentagonImage,
  'basic-game': triangleImage,
};

export const PlayField = () => {
  const { isBonusGame } = useOptions();

  return (
    <div className={styles.playField}>
      <div className={styles.playFieldContent}>
        <h1>Pick Option</h1>

        <img
          src={RULES_IMAGE[isBonusGame ? 'bonus-game' : 'basic-game']}
          alt='Triangle Background'
        />
      </div>
    </div>
  );
};
