import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home"
import {
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  EditJob,
  Error,
  Home,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
} from "./pages"
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
