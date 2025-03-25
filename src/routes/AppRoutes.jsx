import React from "react";
import { Routes, Route } from "react-router-dom";
import Aktualno from "../assets/styles/pages/Aktualno";
import Prispevki from "../assets/styles/pages/Prispevki";
import StrokovnaNovicaDetail from "../assets/styles/pages/StrokovnaNovicaDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Aktualno />} />
      <Route path="/aktualno" element={<Aktualno />} />
      <Route path="/prispevki" element={<Prispevki />} />
      <Route path="/strokovna-novica/:id" element={<StrokovnaNovicaDetail />} />
    </Routes>
  );
};

export default AppRoutes;
