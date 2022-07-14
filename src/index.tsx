import { createContext } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Store from "./store/store";

interface State {
  store: Store;
}

export const store = new Store();

export const Context = createContext<State>({
  store,
});

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Context.Provider
    value={{
      store,
    }}
  >
    <App />
  </Context.Provider>
);

reportWebVitals();
