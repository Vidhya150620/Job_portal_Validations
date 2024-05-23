import { RouterProvider } from "react-router-dom";
import { router } from "../utils/Hooks/createbrowserRouter";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />;
      </Provider>
    </React.StrictMode>
  );
}

export default App;
