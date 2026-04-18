import { createBrowserRouter } from "react-router-dom";

import App from "../app/App";

import Home from "../pages/Homes/Home";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import Engineering from "../pages/Engineering/Engineering";
import Data from "../pages/Data/Data";
import Contact from "../pages/Contact/Contact";
import PageNotFound from "../pages/ErreurPage/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "engineering",
        element: <Engineering />,
      },
      {
        path: "data",
        element: <Data />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },

      // ✅ 404 PAGE (CORRECT)
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);