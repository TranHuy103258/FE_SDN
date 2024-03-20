import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { customerRoutes } from "./customer-route.js";
import { publicRoutes } from "./public.router.js";
import { authRoutes } from "./auth.route.js";
import { ProtectedRoute } from "./protected-route";
import { AuthorizationRoute } from "./authorization-route";
import BlogList from "../Admin/pages/Blog/BlogList";
import BlogDetail from "../Admin/pages/Blog/BlogDetail";
import AddBlog from "../Admin/pages/Blog/AddBlog";
import EditBlog from "../Admin/pages/Blog/EditBlog";
import ErrorPage from "../pages/Error/errorPage.js";
import Error404Page from "../pages/Error/error404.js";
import Error403Page from "../pages/Error/error403.js";
import DefaultAdminLayout from "../Admin/layouts/DefaultAdminLayout.js";
import Customer from "../Admin/pages/Customer/Customer.js";

const allRoutes = createBrowserRouter([
  {
    path: "/admin",
    errorElement: <ErrorPage />,
    element: (
      <ProtectedRoute>
        <DefaultAdminLayout>
          <Outlet />
        </DefaultAdminLayout>
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to={"/admin"} /> },

      // user
      { path: "/admin/user", element: <Customer /> },
      // blogs
      { path: "/admin/blog", element: <BlogList /> },
      { path: "/admin/blog/detail/:id", element: <BlogDetail /> },
      { path: "/admin/blog/add", element: <AddBlog /> },
      { path: "/admin/blog/edit/:id", element: <EditBlog /> },
    ],
  },
  customerRoutes(),
  publicRoutes(),
  authRoutes(),
  { path: "/unauthorize", element: <Error403Page /> },
  { path: "*", element: <Error404Page /> },
]);

export const AppRouter = ({ children }) => (
  <>
    <RouterProvider router={allRoutes} />
    {children}
  </>
);
