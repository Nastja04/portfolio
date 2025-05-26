import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Projecten } from "./components/personal/Projecten";
import { Technology } from "./components/personal/Technology";
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
        path: "/technologies",
        element: <Technology />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projecten />,
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
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </ThemeProvider>
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
