import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";

import { MantineProvider, Text } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}
