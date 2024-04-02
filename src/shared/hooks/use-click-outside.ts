import type { RefObject } from 'react';
import { useEffect } from 'react';

type EventType =
  | 'mousedown'
  | 'mouseup'
  | 'touchstart'
  | 'touchend'
  | 'focusin'
  | 'focusout';

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | RefObject<T>[],
  handler: (event: MouseEvent | TouchEvent | FocusEvent) => void,
  eventType: EventType = 'mousedown',
  eventListenerOptions: AddEventListenerOptions = {}
): void {
  useEffect(() => {
    document.addEventListener(
      eventType,
      (event) => {
        const target = event.target as Node;

        // Do nothing if the target is not connected element with document
        if (!target || !target.isConnected) {
          return;
        }

        const isOutside = Array.isArray(ref)
          ? ref
              .filter((r) => Boolean(r.current))
              .every((r) => r.current && !r.current.contains(target))
          : ref.current && !ref.current.contains(target);

        if (isOutside) {
          handler(event);
        }
      },
      eventListenerOptions
    );
  }, [eventListenerOptions, eventType, handler, ref]);
}
