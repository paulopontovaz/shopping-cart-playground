import { createBrowserRouter } from "react-router-dom";

import { App } from "./components/App";
import { ProductList } from "./components/home/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "/back-office",
        element: <div>Products</div>,
      },
    ],
  },
]);
