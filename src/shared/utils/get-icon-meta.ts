import { SPRITES_META, SpritesMap } from '../types/icon.ts';
import { IconProps } from '../ui/icon/icon.tsx';

export const getIconMeta = <Key extends keyof SpritesMap>({
  name,
  width,
  height,
}: IconProps) => {
  const [spriteName, iconName] = name.split('/') as [Key, SpritesMap[Key]];

  const { filePath, items } = SPRITES_META[spriteName];

  const viewBox = items[iconName]?.viewBox || '';

  const defaultSize = { height: 16, width: 16 };

  const viewBoxArray = viewBox.split(' ');

  if (viewBox) {
    defaultSize.height = Number(height || viewBoxArray[3]);
    defaultSize.width = Number(width || viewBoxArray[2]);
  }

  return {
    defaultSize,
    filePath,
    iconName,
    viewBox,
  };
};
