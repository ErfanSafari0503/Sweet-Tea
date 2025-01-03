import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingScreen from "../pages/LoadingPage";
import PageNotFound from "../pages/PageNotFoundPage";

const Home = lazy(() => import("../pages/HomePage"));
const AboutUs = lazy(() => import("../pages/AboutUsPage"));
const ContactUs = lazy(() => import("../pages/ContactUsPage"));
const SignUp = lazy(() => import("../pages/SignUpPage"));
const SignIn = lazy(() => import("../pages/SignInPage"));
const Dashboard = lazy(() => import("../pages/DashboardPage"));
const Donate = lazy(() => import("../pages/DonatePage"));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="donate" element={<Donate />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
