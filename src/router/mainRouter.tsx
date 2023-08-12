import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import HomePage from "../pages/screen/HomePage";
import PrivateRoute from "./privateRoute";
import Layout from "../components/common/Layout";
import CreateArticle from "../pages/screen/CreateArticle";
import ViewAuthor from "../pages/screen/ViewAuthor";
import ViewRequest from "../pages/screen/ViewRequest";
import ViewFriends from "../pages/screen/ViewFriends";

export const mainRouter = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        index: true,
        path: "/create-article",
        element: <CreateArticle />,
      },
      {
        index: true,
        path: "/view-authors",
        element: <ViewAuthor />,
      },
      {
        index: true,
        path: "/view-request",
        element: <ViewRequest />,
      },
      {
        index: true,
        path: "/view-friends",
        element: <ViewFriends />,
      },
    ],
  },
]);
