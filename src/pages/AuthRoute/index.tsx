import { Navigate } from "react-router-dom";
import { RootState } from "../../store/configureStore";
import { useSelector } from "react-redux";

interface Props {
  children: any;
}

const AuthenticatedRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to='/?signIn=active' />;
  }
  return children;
};

export default AuthenticatedRoute;
