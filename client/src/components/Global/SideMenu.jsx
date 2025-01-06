import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

SideMenu.propTypes = {
  isOpen: PropTypes.bool,
};

export default function SideMenu({ isOpen = false }) {
  return (
    <aside
      className={
        isOpen
          ? "bg-white fixed h-screen z-50 max-w-[50%]"
          : "bg-white fixed h-screen z-50 max-w-[50%] hidden"
      }
    >
      <div className="mx-14">
        <ul className="flex flex-col justify-center items-center my-8 p-4 py-12 gap-10">
          <li className="text-center">
            <NavLink to="/" className="text-xl text-center">
              صفحه اصلی
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/sign-in" className="text-xl text-center">
              ورود
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/sign-up" className="text-xl text-center">
              ثبت نام
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/about-us" className="text-xl">
              درباره ما
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/contact-us" className="text-xl">
              ارتباط با ما
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
