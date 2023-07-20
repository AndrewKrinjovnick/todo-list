import { MainLayout } from "components/layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
