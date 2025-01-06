import { createContext, useState } from "react";
import PropTypes from "prop-types";

AuthProvider.propTypes = {
  children: PropTypes.any,
};

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
