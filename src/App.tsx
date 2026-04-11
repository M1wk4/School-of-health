import { useEffect, useMemo, useState } from "react";

import { Theme, ThemePreset, presetGpnDark, presetGpnDefault } from "@consta/uikit/Theme";

import { AppContextProvider, useAppContext } from "./context/AppContextProvider";
import AppRouter from "./componets/AppRouter";

import "./App.css";

type Item = "Default" | "Dark";

const getTheme = (item: Item) => {
  if (item === "Default") {
    return presetGpnDefault;
  }

  return presetGpnDark;
};

const App = () => {
  return (
    <AppContextProvider>
      <AppInner />
    </AppContextProvider>
  );
};

const AppInner = () => {
  const { valueTheme } = useAppContext();

  const theme = useMemo(() => getTheme(valueTheme), [valueTheme]);

  return (
    <Theme className="App" preset={theme}>
      <AppRouter />
    </Theme>
  );
};

export default App;
