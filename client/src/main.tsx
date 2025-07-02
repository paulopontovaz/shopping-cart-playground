import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "~/assets/styles/global.css";
import { queryClient } from "~/queryClient";
import { router } from "~/routes";

// biome-ignore lint/style/noNonNullAssertion: auto-generated
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
