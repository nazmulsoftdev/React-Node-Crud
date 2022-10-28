import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:name" element={<Edit />} />
          <Route path="add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
