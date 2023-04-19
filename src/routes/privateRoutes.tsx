import Folders from "../components/pages/folders/Folders";
import Folder from "../components/pages/folder/Folder";
import NotFound from "../components/pages/notFound/NotFound";

const privateRoutes = [
  { path: "/", component: <Folders /> },
  { path: "/folder/:id", component: <Folder /> },
  {
    path: "*",
    component: <NotFound />,
  },
];

export default privateRoutes;
