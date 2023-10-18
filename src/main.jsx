import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/layout/Root/Root";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./components/providers/AuthProvider/AuthProvider";
import SignIn from "./components/pages/SignIn/SignIn";
import Register from "./components/pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/singIn",
        element:<SignIn></SignIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
