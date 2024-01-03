import { useContext } from "react";
import { AuthProvider } from "../AuthContext/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthProvider);
  return auth;
};
export default useAuth;
