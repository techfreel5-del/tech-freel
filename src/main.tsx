import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import { AuthProvider } from "@/context/AuthContext";
import { EditorProvider } from "@/context/EditorContext";
import { EditorToolbar, EditorPanel } from "@/components/editor/EditorUI";
import IntroVideo from "@/components/IntroVideo";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EditorProvider>
          <IntroVideo />
          <App />
          <EditorToolbar />
          <EditorPanel />
        </EditorProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

