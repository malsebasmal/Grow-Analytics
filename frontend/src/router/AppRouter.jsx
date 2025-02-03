import { createBrowserRouter } from "react-router"
import { SignUp } from "../pages/SignUp"

export const router = createBrowserRouter([{
  path: "/",
  index: true,
  element: <SignUp />
}])