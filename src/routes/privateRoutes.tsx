import Folders from "../components/pages/folders/Folders";
import Folder from "../components/pages/folder/Folder";
import FolderContainer from "../components/pages/folderContainer/FolderContainer";
import NotFound from "../components/pages/notFound/NotFound";

const privateRoutes = [
  { path: "/folders", component: <Folders /> },
  { path: "/folder/:id", component: <FolderContainer /> },
  {
    path: "*",
    component: <NotFound />,
  },
];

export default privateRoutes;
