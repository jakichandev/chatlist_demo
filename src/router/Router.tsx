import { createBrowserRouter } from "react-router";
import Root from "../Root";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
