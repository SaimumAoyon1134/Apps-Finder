import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Apps from "./Apps.jsx";
import Install from "./Install.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppDetails from "./AppDetails.jsx";
import { InstallProvider } from "./App.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/apps', element: <Apps /> },
      { path: '/installation', element: <Install /> },
      { path: '/apps/:id', element: <AppDetails/>},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <InstallProvider>
      <RouterProvider router={router} />
    </InstallProvider>
  </StrictMode>
);