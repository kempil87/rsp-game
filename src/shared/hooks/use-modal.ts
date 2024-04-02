import { useSelector } from './use-selector';
import { Dispatch } from 'react';
import { ModalAction, ModalNames } from '../store/reducers/modal.ts';

export const useModal = (name?: ModalNames) => {
  const isVisible =
    useSelector<ModalNames | null>((store) => store.modalStore) === name;

  const dispatch = useSelector<Dispatch<ModalAction>>(
    (store) => store.dispatchModal
  );

  const onShow = (name: ModalNames) =>
    dispatch({ type: 'show', payload: name });

  const onHide = () => dispatch({ type: 'hide', payload: null });

  return { isVisible, onShow, onHide };
};
