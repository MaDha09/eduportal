import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Dashboard from './main pages/Dashboard';
import Login from './main pages/LogIn';
import Profile from './main pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Dashboard/>,
  },
  {
    path: "/maindashboard",
    element: <Profile/>,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);