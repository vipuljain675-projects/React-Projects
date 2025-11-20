import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import CreatePostPage from "./pages/CreatePostPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "create-post", element: <CreatePostPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
