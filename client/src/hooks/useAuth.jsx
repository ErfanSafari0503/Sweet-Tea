import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside of the AuthProvider.");

  return context;
}

export { useAuth };
