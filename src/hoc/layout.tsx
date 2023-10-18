import { Outlet } from "react-router-dom";
import PersonalSidebar from "../components/Personal/PersonalSidebar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div
        className='container-layout'
        style={{
          display: "flex",
          gap: "34px",
          justifyContent: "center",
          padding: "190px 0",
        }}>
        <PersonalSidebar />
        <main>
          <Outlet />
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
