import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"

import Catalog from "./pages/Catalog/Catalog";
import { Shop } from "./pages/Shop";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            
            <Route path="/logo" element={<Catalog/>} />
            <Route path="/shop" element={<Shop/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
