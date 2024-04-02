import { useModal } from '../../hooks/use-modal.ts';
import { ModalNames } from '../../store/reducers/modal.ts';
import { useRef } from 'react';
import { useOutsideClick } from '../../hooks/use-click-outside.ts';
import styles from './rules.modal.module.css';
import { cn } from '../../utils/classnames.ts';
import { Portal } from '../../containers/portal/portal.tsx';
import bonusRulesImage from '../../../../public/images/image-rules-bonus.svg';
import rulesImage from '../../../../public/images/image-rules.svg';
import { useOptions } from '../../hooks/use-options.ts';

const RULES_IMAGE = {
  'bonus-game': bonusRulesImage,
  'basic-game': rulesImage,
};

export const RulesModal = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { isVisible, onHide } = useModal(ModalNames.Rules);
  const { isBonusGame } = useOptions();

  useOutsideClick(contentRef, onHide);

  return (
    <Portal>
      <div className={cn(styles.rulesModal, { [styles.active]: isVisible })}>
        <div ref={contentRef} className={styles.rulesModalContent}>
          <img
            src={RULES_IMAGE[isBonusGame ? 'bonus-game' : 'basic-game']}
            alt='Rules'
          />
        </div>
      </div>
    </Portal>
  );
};
