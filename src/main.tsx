import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/common/theme-provider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { Provider as NiceModalProvider } from "@ebay/nice-modal-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NiceModalProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
        <Toaster />
      </ThemeProvider>
    </NiceModalProvider>
  </StrictMode>
);
