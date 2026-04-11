import React, { createContext, useContext, useState } from 'react';

import { themes } from '@/constants/themes';

import { Theme } from '@/types/theme.types';

const AppContext = createContext<{ valueTheme: Theme; setValueTheme: React.Dispatch<React.SetStateAction<Theme>> } | undefined>(undefined);


export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [valueTheme, setValueTheme] = useState<Theme>(themes[0]);

  return <AppContext.Provider value={{ valueTheme, setValueTheme }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};