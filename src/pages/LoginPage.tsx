// src/pages/LoginPage.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useThemeContext } from '../contexts/ThemeContext'; // Para testar a troca de tema

const LoginPage: React.FC = () => {
  const { toggleColorMode, mode } = useThemeContext(); // Acessa o contexto do tema

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default', // Cor de fundo do tema
        color: 'text.primary',        // Cor do texto do tema
        p: 2
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Bem-vindo ao Easy Control!
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Tela de Login
      </Typography>
      <p>Modo atual: {mode}</p>
      <Button variant="contained" onClick={toggleColorMode}>
        Alternar Tema
      </Button>
    </Box>
  );
};

export default LoginPage;