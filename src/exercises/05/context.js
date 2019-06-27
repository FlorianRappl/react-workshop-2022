import { createContext } from 'react';

export const defaultState = {
  count: 0,
};

export const defaultActions = {
  increment() {},
};

export const GlobalContext = createContext({ ...defaultState, ...defaultActions });
