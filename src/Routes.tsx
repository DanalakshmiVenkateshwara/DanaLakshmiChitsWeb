import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/scenes/landingPage";
import Groups from "./components/scenes/groups";
import Users from "./components/scenes/users";
import Enrollments from "./components/scenes/enrollMents";
import Payments from "./components/scenes/payments";
import AplicationUsers from "./components/scenes/appUsers";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Groups",
    element: <Groups/>,
  },
  {
    path: "/Users",
    element: <Users/>,
  },
  {
    path: "/Enrollments",
    element: <Enrollments/>,
  },
  {
    path: "/Payments",
    element: <Payments/>,
  },
  {
    path: "/AplicationUsers",
    element: <AplicationUsers/>,
  },
]);

function Routes() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default Routes;
