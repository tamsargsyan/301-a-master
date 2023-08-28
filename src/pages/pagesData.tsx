import { routerType } from "../utils/router.types";
import FullProjectInfo from "./FullProjectInfo";
import Home from "./Home";
import OurProjects from "./OurProject";

const pagesData: routerType[] = [
  {
    path: "/301/build", // Add :lang parameter here
    element: <Home />,
    title: "home",
  },
  {
    path: "/:lang/301/build", // Add :lang parameter here
    element: <Home />,
    title: "home",
  },
  {
    path: "/301/build/projects", // Add :lang parameter here
    element: <OurProjects />,
    title: "Projects",
  },
  {
    path: "/:lang/301/build/projects", // Add :lang parameter here
    element: <OurProjects />,
    title: "Projects",
  },
  {
    path: "/301/build/projects/:id", // Add :lang parameter here
    element: <FullProjectInfo />,
    title: "Project",
  },
  {
    path: "/:lang/301/build/projects/:id", // Add :lang parameter here
    element: <FullProjectInfo />,
    title: "Project",
  },
];

export default pagesData;
