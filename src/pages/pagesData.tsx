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
import AuthenticatedRoute from "./AuthRoute";
import Media from "./Media";
import Calendar from "./Calendar";
import CalendarDetails from "./CalendarDetails";
import ContactPage from "./Contact";
import AccountTypeModal from "../components/AccountTypeModal";
import Donation from "../components/Donation";
import OneTimeDonation from "../components/OneTimeDonation";
import DonationProjectsModal from "../components/DonationProjectsModal";
import DonateToTheProject from "../components/DonateToTheProject";
import Privacy from "../components/Privacy";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

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
    path: "/projects/:name",
    element: <ProjectDetails />,
    title: "Project",
  },
  {
    path: "/:lang/projects/:name",
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
    path: "/media",
    element: <Media />,
    title: "Media",
  },
  {
    path: "/:lang/media",
    element: <Media />,
    title: "Media",
  },
  {
    path: "/calendar",
    element: <Calendar />,
    title: "Calendar",
  },
  {
    path: "/:lang/calendar",
    element: <Calendar />,
    title: "Calendar",
  },
  {
    path: "/calendar/:id",
    element: <CalendarDetails />,
    title: "Calendar",
  },
  {
    path: "/:lang/calendar/:id",
    element: <CalendarDetails />,
    title: "Calendar",
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
    path: "/contact",
    element: <ContactPage />,
    title: "Contact Us",
  },
  {
    path: "/:lang/contact",
    element: <ContactPage />,
    title: "Contact Us",
  },
  // modals
  {
    path: "/:lang/accountType",
    element: <AccountTypeModal />,
    title: "Account Type",
  },
  {
    path: "/:lang/donation",
    element: <Donation />,
    title: "Donation",
  },
  {
    path: "/:lang/one-time-donation",
    element: <OneTimeDonation />,
    title: "One Time Donation",
  },
  {
    path: "/:lang/projects-donation",
    element: <DonationProjectsModal />,
    title: "Donation Project",
  },
  {
    path: "/:lang/projects-donation/:slug",
    element: <DonateToTheProject />,
    title: "Donate Single Project",
  },
  {
    path: "/:lang/terms-of-services",
    element: <Privacy />,
    title: "Terms Of Services",
  },
  {
    path: "/:lang/privacy-policy",
    element: <Privacy />,
    title: "Privacy Policy",
  },
  {
    path: "/:lang/login",
    element: <SignIn />,
    title: "Sign In",
  },
  {
    path: "/:lang/signUp",
    element: <SignUp />,
    title: "Sign Up",
  },
  {
    path: "/personal/personal-info",
    element: (
      <AuthenticatedRoute>
        <Layout>
          <PersonalInfo />
        </Layout>
      </AuthenticatedRoute>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/personal/personal-info",
    element: (
      <AuthenticatedRoute>
        <Layout>
          <PersonalInfo />
        </Layout>
      </AuthenticatedRoute>
    ),
    title: "Personal Info",
  },
  {
    path: "/personal/my-project",
    element: (
      <AuthenticatedRoute>
        <Layout>
          <PerosnalProjects title='my-project' />
        </Layout>
      </AuthenticatedRoute>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/personal/my-project",
    element: (
      <AuthenticatedRoute>
        <Layout>
          <PerosnalProjects title='my-project' />
        </Layout>
      </AuthenticatedRoute>
    ),
    title: "Personal Info",
  },
  {
    path: "/personal/personal-info/edit-profile",
    element: (
      <AuthenticatedRoute>
        <Layout>
          <EditProfile />
        </Layout>
      </AuthenticatedRoute>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/personal/personal-info/edit-profile",
    element: (
      <AuthenticatedRoute>
        <Layout>
          <EditProfile />
        </Layout>
      </AuthenticatedRoute>
    ),
    title: "Personal Info",
  },
  {
    path: "/personal/my-events",
    element: (
      <AuthenticatedRoute>
        <Layout>
          <PerosnalProjects
            title='my-events'
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
          />
        </Layout>
      </AuthenticatedRoute>
    ),
    title: "Personal Info",
  },
  {
    path: "/:lang/personal/my-events",
    element: (
      <AuthenticatedRoute>
        <Layout>
          <PerosnalProjects
            title='my-events'
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
          />
        </Layout>
      </AuthenticatedRoute>
    ),
    title: "Personal Info",
  },
];

export default pagesData;
