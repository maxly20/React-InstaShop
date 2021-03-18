// React Context API

import React, { createContext, useContext, useReducer } from 'react';

// this is the DATA LAYER
export const StateContext = createContext();

// this is the PROVIDER to wrap the entire app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how we USE IT inside a component
export const useStateValue = () => useContext(StateContext);
