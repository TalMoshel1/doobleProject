import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/main.scss";
if (import.meta.env.DEV) {
  import("./styles/debug.scss");
}
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { I18nProvider } from "./context/I18nContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider defaultLocale="he">
      <ThemeProvider>
        
        <App />
      </ThemeProvider>
    </I18nProvider>
  </StrictMode>
);
