import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

UserProvider.propTypes = {
  children: PropTypes.any,
};

const UserContext = createContext();

const initialState = {
  username: "",
  firstName: "",
  walletAmount: 0,
  teaAmount: 0,
  selectedTea: 0,
  visits: 0,
  recivedDonations: 0,
  sendedDonations: 0,
  isAuthenticated: false,
  isOpen: false,
  isLoading: false,
  error: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "userData/loaded":
      return {
        ...state,
        username: action.payload.username,
        firstName: action.payload.firstName,
        walletAmount: action.payload.walletAmount,
        teaAmount: action.payload.teaAmount,
        // visits: action.payload.visits,
        // recivedDonations: action.payload.recivedDonations,
        // sendedDonations: action.payload.sendedDonations,
        isAuthenticated: true,
      };
    case "menu/toggled":
      return { ...state, isOpen: !state.isOpen };
    case "loading/started":
      return { ...state, isLoading: true };
    case "loading/ended":
      return { ...state, isLoading: false };
    case "submit/started":
      return { ...state, isLoading: true };
    case "sign/out":
      return { initialState };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
