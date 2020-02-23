import React from "react";
import { AppProvider } from "./AppContext";
import StartPage from "./StartPage";
import BottomComponent from "./BottomComponent";

export default function App() {
  return (
    <AppProvider>
      <StartPage name="David Coelho" />
      <BottomComponent />
    </AppProvider>
  );
}
