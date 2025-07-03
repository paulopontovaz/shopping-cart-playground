import { createBrowserRouter } from "react-router-dom";
import { App } from "~/components/App";
import { BackOffice } from "~/components/back-office/BackOffice";
import { Home } from "~/components/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/back-office",
        element: <BackOffice />,
      },
    ],
  },
]);
