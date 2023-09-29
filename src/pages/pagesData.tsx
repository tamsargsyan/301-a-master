import { routerType } from "../utils/router.types";
import AboutUs from "./AboutUs";
import ProjectDetails from "./ProjectDetails";
import Home from "./Home";
import OurProjects from "./OurProject";
import EcoSystemDetails from "./EcosystemDetails";
import Personal from "../components/Personal/PersonalSidebar";
import PersonalInfo from "../components/Personal/Personal-Info";
import Layout from "../hoc/layout";
import PerosnalProjects from "../components/Personal/PersonalProjects";
import EditProfile from "../components/Personal/EditProfile";

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
    element: <ProjectDetails />,
    title: "Project",
  },
  {
    path: "/:lang/301/projects/:id",
    element: <ProjectDetails />,
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
  {
    path: "/301/:ecosystem",
    element: <EcoSystemDetails />,
    title: "Ecosystem Details",
  },
  {
    path: "/:lang/301/:ecosystem",
    element: <EcoSystemDetails />,
    title: "Ecosystem Details",
  },
  // {
  //   path: "/301/personal",
  //   element: <Personal />,
  //   title: "Personal",
  // },
  // {
  //   path: "/:lang/301/personal",
  //   element: <Personal />,
  //   title: "Personal",
  // },
  {
    path: "/301/personal/personal-info",
    element: (
      <Layout>
        <PersonalInfo />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/301/personal/personal-info",
    element: (
      <Layout>
        <PersonalInfo />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/301/personal/my-project",
    element: (
      <Layout>
        <PerosnalProjects title='My Project' />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/301/personal/my-project",
    element: (
      <Layout>
        <PerosnalProjects title='My Project' />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/301/personal/personal-info/edit-profile",
    element: (
      <Layout>
        <EditProfile />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/301/personal/personal-info/edit-profile",
    element: (
      <Layout>
        <EditProfile />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/301/personal/my-events",
    element: (
      <Layout>
        <PerosnalProjects
          title='My events'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
        />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/301/personal/my-events",
    element: (
      <Layout>
        <PerosnalProjects
          title='My events'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
        />
      </Layout>
    ),
    title: "Personal Info",
  },
];

export default pagesData;
