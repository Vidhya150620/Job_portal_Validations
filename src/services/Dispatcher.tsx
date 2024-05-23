import { useEffect, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { fetchCurrentUserAPI } from "../features/currentUserSlice";
import Cookies from "universal-cookie";

interface DispatcherProps {
  children: ReactNode; // Define the children prop explicitly
}

const Dispatcher: React.FC<DispatcherProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const token = new Cookies().get("token");

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUserAPI());
      // dispatch(fetchOrganizationViewAPI("66436f5f1d3be7f0665b8ec2"));
    }
  }, [dispatch, token]);

  return <>{children}</>; // Render the children
};

export default Dispatcher;
