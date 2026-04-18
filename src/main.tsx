<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
>>>>>>> 889e568 (Ajout de scss et de tailwind et structuration Style)

import { RouterProvider } from "react-router-dom";
import { router } from "./app/routers.tsx";

import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);