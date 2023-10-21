import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./Layout/AppLayout";

import HomePage from "./views/HomePage";
import QuizPage from "./views/QuizPage";
import ResultPage from "./views/ResultPage";
import ProfilePage from "./views/ProfilePage";

// creating routes
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
