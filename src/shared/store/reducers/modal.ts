import { ReducerActionUtil } from '../../containers/context-provider/context-provider.tsx';

export enum ModalNames {
  Rules = 'Rules',
}

type ModalState = ModalNames | null;

export type ModalAction = ReducerActionUtil<ModalState, 'show' | 'hide'>;

export const modalReducer = (state: ModalState, action: ModalAction) => {
  if (action.type === 'show') {
    return action.payload;
  }

  if (action.type === 'hide') {
    return null;
  }

  return state;
};
