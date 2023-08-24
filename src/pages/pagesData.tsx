import { routerType } from "../utils/router.types";
import Home from "./Home";
import OurProjects from "./OurProject";

const pagesData: routerType[] = [
  {
    path: "/301/build",
    element: <Home />,
    title: "home",
  },
  {
    path: "projects",
    element: <OurProjects />,
    title: "Projects",
  },
  {
    path: "projects/:id",
    element: <OurProjects />,
    title: "Project",
  },
];

export default pagesData;
