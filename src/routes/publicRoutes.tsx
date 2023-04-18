import LogIn from "../components/pages/LogIn";
import NotFound from "../components/pages/NotFound";

const publicRoutes = [
  { path: "/", component: <LogIn /> },
  {
    path: "*",
    component: <NotFound />,
  },
];

export default publicRoutes;
