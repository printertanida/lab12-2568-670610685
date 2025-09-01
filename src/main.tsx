import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme, virtualColor } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  colors: {
    printer: virtualColor({
      name: "Printer",
      dark: "yellow",
      light: "violet",
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
