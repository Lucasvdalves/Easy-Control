// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useMemo, useContext } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { getAppTheme } from '../styles/theme'; // Importa a função do tema

interface ThemeContextType {
  toggleColorMode: () => void;
  mode: PaletteMode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light'); // Estado inicial: tema claro

  // Função para alternar o modo do tema
  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  // Memoiza o tema para evitar recriações desnecessárias
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Reseta o CSS padrão e aplica estilos base do Material UI */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar o contexto do tema
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};