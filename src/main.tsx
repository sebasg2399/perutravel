import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BackgroundProvider } from "./context/BackgroundContext";
import { reset } from "~/styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BackgroundProvider>
        <Global styles={reset} />
        <App />
      </BackgroundProvider>
    </BrowserRouter>
  </React.StrictMode>
);
