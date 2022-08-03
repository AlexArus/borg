import { useCallback, useEffect, useState } from "react";

// export type ActionPipe = {};

// export function createActionPipe() {}

export type ActionCallback<T> = (payload: T) => void;

export type Action<T> = {
  create(payload: T): void;
  subscribe(callback: ActionCallback<T>): () => void;
};

export function createAction<T>(): Action<T> {
  const subscribers: Set<ActionCallback<T>> = new Set();

  return {
    create: (payload: T) => {
      subscribers.forEach((callback) => callback(payload));
    },
    subscribe: (callback: (payload: T) => void) => {
      subscribers.add(callback);
      
      return () => {
        subscribers.delete(callback);
      };
    },
  };
}

export function useAction<T>(action: Action<T>) {
  const [payload, setPayload] = useState<T>(null);

  const callback = useCallback((payload: T) => {
    setPayload(payload);
  }, []);

  useEffect(() => action.subscribe(callback), []);

  return payload;
}
