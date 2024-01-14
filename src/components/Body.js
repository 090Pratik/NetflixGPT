import React from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

import Shimmer from "./Shimmer";
import { Suspense, lazy } from "react";


const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Error = lazy(() => import("./Error"));

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/info/:id",
      element: (
        <Suspense fallback={<Shimmer />}>
          <MovieDetails />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense>
          <Error />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
