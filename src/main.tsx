import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnvilProvider } from "@servicetitan/anvil2";
import { Agentation } from "agentation";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AnvilProvider themeData={{ mode: "light" }}>
      <App />
      {import.meta.env.DEV && <Agentation endpoint="http://localhost:4747" />}
    </AnvilProvider>
  </BrowserRouter>
);
