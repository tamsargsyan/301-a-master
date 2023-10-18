import { routerType } from "../utils/router.types";
import AboutUs from "./AboutUs";
import ProjectDetails from "./ProjectDetails";
import Home from "./Home";
import OurProjects from "./OurProject";
import EcoSystemDetails from "./EcosystemDetails";
import PersonalInfo from "../components/Personal/Personal-Info";
import Layout from "../hoc/layout";
import PerosnalProjects from "../components/Personal/PersonalProjects";
import EditProfile from "../components/Personal/EditProfile";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home",
  },
  {
    path: "/:lang/",
    element: <Home />,
    title: "home",
  },
  {
    path: "/projects",
    element: <OurProjects />,
    title: "Projects",
  },
  {
    path: "/:lang/projects",
    element: <OurProjects />,
    title: "Projects",
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
    title: "Project",
  },
  {
    path: "/:lang/projects/:id",
    element: <ProjectDetails />,
    title: "Project",
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    title: "About Us",
  },
  {
    path: "/:lang/about-us",
    element: <AboutUs />,
    title: "About Us",
  },
  {
    path: "/ecosystem/:ecosystem",
    element: <EcoSystemDetails />,
    title: "Ecosystem Details",
  },
  {
    path: "/:lang/ecosystem/:ecosystem",
    element: <EcoSystemDetails />,
    title: "Ecosystem Details",
  },
  {
    path: "/personal/personal-info",
    element: (
      <Layout>
        <PersonalInfo />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/personal/personal-info",
    element: (
      <Layout>
        <PersonalInfo />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/personal/my-project",
    element: (
      <Layout>
        <PerosnalProjects title='my-project' />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/personal/my-project",
    element: (
      <Layout>
        <PerosnalProjects title='my-project' />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/personal/personal-info/edit-profile",
    element: (
      <Layout>
        <EditProfile />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/personal/personal-info/edit-profile",
    element: (
      <Layout>
        <EditProfile />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/personal/my-events",
    element: (
      <Layout>
        <PerosnalProjects
          title='my-events'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
        />
      </Layout>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/personal/my-events",
    element: (
      <Layout>
        <PerosnalProjects
          title='my-events'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
        />
      </Layout>
    ),
    title: "Personal Info",
  },
];

export default pagesData;
