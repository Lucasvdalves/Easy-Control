// src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe seus componentes de página aqui (vamos criá-los em breve)
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
// Importe outros componentes conforme forem criados

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas (acessíveis sem autenticação) */}
        <Route path="/login" element={<LoginPage />} />
        {/* Rota raiz redireciona para o login por enquanto, ou para o dashboard se autenticado */}
        <Route path="/" element={<LoginPage />} />

        {/* Rotas privadas (iremos proteger estas mais tarde com autenticação) */}
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Adicione outras rotas aqui conforme as páginas forem criadas */}
        {/* <Route path="/products" element={<ProductListPage />} /> */}
        {/* <Route path="/admin" element={<AdminPanelPage />} /> */}

        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;