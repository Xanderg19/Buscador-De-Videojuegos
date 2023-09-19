import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Busqueda from '../components/Busqueda';
import DetalleJuego from '../components/DetallesJuego';

import HomeGames from '../components/HomeGames';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Busqueda />
      <Routes>
        <Route path="/" element={<HomeGames />} />
        <Route path="/detalle-juego/:id" element={<DetalleJuego />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
