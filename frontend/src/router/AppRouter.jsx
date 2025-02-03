import { createBrowserRouter } from "react-router"
import { SignUp } from "../pages/SignUp"

export const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <SignUp />
    },
    {
      path: "",
      element: <Group />
    }
  ]
}])