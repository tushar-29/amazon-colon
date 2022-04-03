import React, {createContext, useContext, useReducer} from "react";

// Prepare the data Layer
export const StateContext = createContext(undefined);

// Wrapping the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pulling the data layer
export const useStateValue = () => useContext(StateContext);
