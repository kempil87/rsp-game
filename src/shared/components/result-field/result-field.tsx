import styles from './result-field.module.css';
import { OptionCard } from '../option-card/option-card.tsx';
import { useResult } from '../../hooks/use-result.ts';

export const ResultField = () => {
  const {
    selectPlayerOption,
    playAgain,
    resultTitle,
    selectAiOption,
    isLoading,
  } = useResult();

  if (!selectPlayerOption) return null;

  return (
    <div className={styles.resultField}>
      <div className={styles.resultFieldContent}>
        <div className={styles.resultOptionWrap}>
          <span>You Pick</span>

          <OptionCard className={styles.resultOption} {...selectPlayerOption} />
        </div>

        <div className={styles.resultInfo}>
          <span>Win in: {resultTitle}</span>

          <button disabled={isLoading} onClick={playAgain}>
            Play Again
          </button>
        </div>

        <div className={styles.resultOptionWrap}>
          <span>AI Pick</span>

          <OptionCard
            isLoading={isLoading}
            className={styles.resultOption}
            {...selectAiOption}
          />
        </div>
      </div>
    </div>
  );
};
