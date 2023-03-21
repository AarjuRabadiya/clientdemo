import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";

import Dashboard from "./Pages/dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Dashboard />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
