import styles from './float-buttons.module.css';
import { useModal } from '../../shared/hooks/use-modal.ts';
import { ModalNames } from '../../shared/store/reducers/modal.ts';
import { useSelector } from '../../shared/hooks/use-selector.ts';

export const FloatButtons = () => {
  const dispatchGameOptions = useSelector((store) => store.dispatchGameOptions);
  const { onShow } = useModal();

  const handleShowRulesModal = () => onShow(ModalNames.Rules);

  const handleChangeView = () =>
    dispatchGameOptions({ type: 'toggle', payload: null });

  return (
    <div className={styles.float}>
      <button onClick={handleChangeView}>Bonus</button>
      <button onClick={handleShowRulesModal}>Rules</button>
    </div>
  );
};
