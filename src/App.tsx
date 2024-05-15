import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Characters } from "./components/Characters";
import Episodes from "./components/Episodes/Episodes";
import Locations from "./components/Locations/Locations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="episodes" element={<Episodes />} />
          <Route path="locations" element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
