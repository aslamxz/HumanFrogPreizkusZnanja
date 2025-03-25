import React, { useState, useCallback } from "react";
// import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
// import Aktualno from "./assets/styles/pages/Aktualno";
// import Header from "./assets/styles/components/Header";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   console.log("Activated");
  //   setMenuOpen((prevState) => !prevState);
  // };

  return (
    <>
      <main>
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
