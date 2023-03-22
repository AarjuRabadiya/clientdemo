import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";

import Dashboard from "./Pages/dashboard";
function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Dashboard />,
      //  children: [
      //     {
      //       path: "team",
      //       element: <Team />,
      //     },
      //   ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
