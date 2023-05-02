import React from "react";
import ReactDOM from "react-dom/client";
import 'react-tooltip/dist/react-tooltip.css'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes/Routes.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
