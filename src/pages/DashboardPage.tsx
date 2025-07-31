// src/pages/DashboardPage.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const DashboardPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 2
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Esta é a tela principal após o login.
      </Typography>
    </Box>
  );
};

export default DashboardPage;