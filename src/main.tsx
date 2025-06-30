import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
// import { makeServer } from "./components/mock/mock.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";


// if (process.env.NODE_ENV === 'development' ){
//   makeServer();
// }

createRoot(document.getElementById("root")!).render(
  <StrictMode>
        <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
    </QueryClientProvider>
  </StrictMode>
)
