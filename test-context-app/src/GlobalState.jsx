import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  value: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const incrementValue = (value) => {
    dispatch({ type: 'INCREMENT', payload: value });
  };

  const decrementValue = (value) => {
    dispatch({ type: 'DECREMENT', payload: value });
  };

  return (
    <GlobalContext.Provider
      value={{
        value: state.value,
        incrementValue,
        decrementValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
