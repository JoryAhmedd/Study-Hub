"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  theme: "light",
};

function reducer(state, action) {
    const {type} = action;

    switch (type) {
        case "TOGGLE_THEME": 
            return {

                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            }

        default:
            return state;
        
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.theme === "dark");
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}