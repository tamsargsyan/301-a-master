import { routerType } from "../utils/router.types";
import AboutUs from "./AboutUs";
import FullProjectInfo from "./FullProjectInfo";
import Home from "./Home";
import OurProjects from "./OurProject";

const pagesData: routerType[] = [
  {
    path: "/301",
    element: <Home />,
    title: "home",
  },
  {
    path: "/:lang/301",
    element: <Home />,
    title: "home",
  },
  {
    path: "/301/projects",
    element: <OurProjects />,
    title: "Projects",
  },
  {
    path: "/:lang/301/projects",
    element: <OurProjects />,
    title: "Projects",
  },
  {
    path: "/301/projects/:id",
    element: <FullProjectInfo />,
    title: "Project",
  },
  {
    path: "/:lang/301/projects/:id",
    element: <FullProjectInfo />,
    title: "Project",
  },
  {
    path: "/301/about-us",
    element: <AboutUs />,
    title: "About Us",
  },
  {
    path: "/:lang/301/about-us",
    element: <AboutUs />,
    title: "About Us",
  },
];

export default pagesData;
