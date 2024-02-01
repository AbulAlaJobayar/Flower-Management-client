import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/addProduct/AddProduct";
import ManageProduct from "../pages/manageProduct/ManageProduct";
import Order from "../pages/order/Order";
import Profile from "../pages/Profile/Profile";
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home></Home>,
  //     },
  //   ],
  // },

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/manageProduct",
        element: <ManageProduct />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);
export default router;
