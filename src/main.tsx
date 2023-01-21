import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { initializeIcons } from "@fluentui/react";
import Navigation from "./Navigation";
import "./index.css";

initializeIcons();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </FluentProvider>
  </React.StrictMode>
);
