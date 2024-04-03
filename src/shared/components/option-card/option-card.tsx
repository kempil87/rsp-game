import { cn } from '../../utils/classnames.ts';
import styles from '../play-field/play-field.module.css';
import { AnyIconName, Icon } from '../../ui/icon/icon.tsx';
import { OptionIds } from '../../types/option.ts';
import { GameOption } from '../../types/game-options.ts';
import { memo } from 'react';

interface OptionCardProps extends Partial<GameOption> {
  onPickOption?: (id: OptionIds) => void;
  className?: HTMLButtonElement['className'];
  isLoading?: boolean;
}

type ClassNameParams = Record<PropertyKey, boolean>;

export const OptionCard = memo(
  ({ id = 'rock', className, onPickOption, isLoading }: OptionCardProps) => {
    const iconName: AnyIconName = isLoading ? 'sprite/spin' : `sprite/${id}`;

    return (
      <button
        onClick={() => onPickOption?.(id)}
        className={cn(styles.option, styles[id], className, {
          [styles.loading]: isLoading,
        } as ClassNameParams)}
      >
        <Icon
          className={cn({ [styles.loading]: isLoading } as ClassNameParams)}
          name={iconName}
          {...(isLoading && { width: 100, height: 100 })}
        />
      </button>
    );
  }
);
