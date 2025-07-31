// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';


// Função para criar o tema baseado no modo (claro/escuro)
export const getAppTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode, // Define se o tema é 'light' ou 'dark'
    primary: {
      main: '#1976d2', // Azul padrão do Material UI para primário
    },
    secondary: {
      main: '#dc004e', // Vermelho padrão do Material UI para secundário
    },
    // Você pode personalizar outras cores aqui, como fundo, texto, etc.
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fonte padrão
  },
  // Adicione outras customizações do tema, como breakpoints, spacing, etc.
});