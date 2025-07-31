// src/App.tsx
import React from 'react';
import AppRoutes from './routes/AppRoutes'; // Importe suas rotas

function App() {
  return (
    <div className="App">
      <AppRoutes /> {/* Renderiza o componente de rotas */}
    </div>
  );
}

export default App;