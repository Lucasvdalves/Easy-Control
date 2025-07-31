// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Seus estilos globais, se houver
import { ThemeContextProvider } from './contexts/ThemeContext'; // Importe o Contexto do Tema

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider> {/* Envolve toda a aplicação com o provedor de tema */}
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
);