import * as React from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import { Login, SignUp } from "./Auth";
export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <>
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
