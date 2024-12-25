import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Donate from "../pages/Donate";
=======
import LoadingScreen from "../components/LoadingScreen";

const Home = lazy(() => import("../pages/Home"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
>>>>>>> 609ecb74e9125b5608d592e6ecd70463f292953b

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route index element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="donate" element={<Donate />} />
=======
          <Suspense fallback={<LoadingScreen />}>
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Suspense>
>>>>>>> 609ecb74e9125b5608d592e6ecd70463f292953b
        </Routes>
      </BrowserRouter>
    </>
  );
}
