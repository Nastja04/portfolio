import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Skills } from "./components/Skills";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const theme = createTheme();

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
