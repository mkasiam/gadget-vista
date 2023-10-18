import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/layout/Root/Root";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./components/providers/AuthProvider/AuthProvider";
import SignIn from "./components/pages/SignIn/SignIn";
import Register from "./components/pages/Register/Register";
import PrivateRoute from "./components/pages/PrivateRoute/PrivateRoute";
import Profile from "./components/pages/Profile/Profile";
import NotFound from "./components/pages/NotFound/NotFound";
import HomeLayout from "./components/Home/HomeLayOut/HomeLayout";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import AddProduct from "./components/pages/AddProduct/AddProduct";
import MyCart from "./components/pages/MyCart/MyCart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"/myCart",
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
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
