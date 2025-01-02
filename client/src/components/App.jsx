import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingScreen from "../pages/LoadingScreen";

const Home = lazy(() => import("../pages/Home"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Donate = lazy(() => import("../pages/Donate"));
const Notification = lazy(() => import("../pages/NotificationPage"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="donate" element={<Donate />} />
            <Route path="loading" element={<LoadingScreen />} />
            <Route path="notification" element={<Notification />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="error-page" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
