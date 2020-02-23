import React, { useState } from "react";

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    title: "Welcome, ",
    count: 0
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
