import { routerType } from "../utils/router.types";
import FullProjectInfo from "./FullProjectInfo";
import Home from "./Home";
import OurProjects from "./OurProject";

const pagesData: routerType[] = [
  {
    path: "/301/build",
    element: <Home />,
    title: "home",
  },
  {
    path: "/:lang",
    element: <Home />,
    title: "home",
  },
  {
    path: "projects",
    element: <OurProjects />,
    title: "Projects",
  },
  // {
  //   path: "projects/:lang",
  //   element: <OurProjects />,
  //   title: "Projects",
  // },
  // {
  //   path: "projects/:id/:lang",
  //   element: <FullProjectInfo />,
  //   title: "Projects",
  // },
  {
    path: "projects/:id",
    element: <FullProjectInfo />,
    title: "Project",
  },
];

export default pagesData;
