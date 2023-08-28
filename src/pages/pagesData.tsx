import { routerType } from "../utils/router.types";
import AboutUs from "./AboutUs";
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
    path: "/:lang/301/build",
    element: <Home />,
    title: "home",
  },
  {
    path: "/301/build/projects",
    element: <OurProjects />,
    title: "Projects",
  },
  {
    path: "/:lang/301/build/projects",
    element: <OurProjects />,
    title: "Projects",
  },
  {
    path: "/301/build/projects/:id",
    element: <FullProjectInfo />,
    title: "Project",
  },
  {
    path: "/:lang/301/build/projects/:id",
    element: <FullProjectInfo />,
    title: "Project",
  },
  {
    path: "/301/build/about-us",
    element: <AboutUs />,
    title: "About Us",
  },
];

export default pagesData;
