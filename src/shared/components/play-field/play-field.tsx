import triangleImage from '../../../../public/images/bg-triangle.svg';
import pentagonImage from '../../../../public/images/bg-pentagon.svg';
import styles from './play-field.module.css';
import { useOptions } from '../../hooks/use-options.ts';
import { OptionCard } from '../option-card/option-card.tsx';

const RULES_IMAGE: Record<string, string> = {
  'bonus-game': pentagonImage,
  'basic-game': triangleImage,
};

export const PlayField = () => {
  const { isBonusGame, gameOptions, onPickOption } = useOptions();

  return (
    <div className={styles.playField}>
      <div className={styles.playFieldContent}>
        <img
          src={RULES_IMAGE[isBonusGame ? 'bonus-game' : 'basic-game']}
          alt='Triangle Background'
        />

        {gameOptions.map((option) => (
          <OptionCard key={option.id} onPickOption={onPickOption} {...option} />
        ))}
      </div>
    </div>
  );
};
