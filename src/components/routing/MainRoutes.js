import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cola from "../../pages/Cola";
import CrearTicket from "../../pages/CrearTicket";
import Escritorio from "../../pages/Escritorio";
import Ingresar from "../../pages/Ingresar";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/ingresar" element={<Ingresar />} />
      <Route path="/cola" element={<Cola />} />
      <Route path="/crear" element={<CrearTicket />} />
      <Route path="/escritorio" element={<Escritorio />} />
      <Route path="*" element={<Navigate to="/ingresar" />} />
    </Routes>
  );
};
