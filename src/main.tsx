import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import { AuthProvider } from "@/context/AuthContext";
import IntroVideo from "@/components/IntroVideo";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <IntroVideo />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

